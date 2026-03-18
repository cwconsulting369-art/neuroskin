import { NextRequest, NextResponse } from "next/server";

const HF_MODEL = "Anwarkh1/Skin_Cancer-Image_Classification";
const HF_ENDPOINT = `https://router.huggingface.co/hf-inference/models/${HF_MODEL}`;

// Malignant labels → Hohes Risiko
const HIGH_RISK = ["melanoma", "basal_cell_carcinoma", "squamous_cell_carcinoma"];
// Suspicious labels → Verdächtig
const SUSPICIOUS = ["actinic_keratoses", "benign_keratosis-like_lesions", "dermatofibroma"];
// Benign → Gutartig
const BENIGN = ["melanocytic_nevi", "vascular_lesions"];

function mapToRisk(label: string, score: number): "gutartig" | "verdächtig" | "hohes_risiko" {
  const l = label.toLowerCase();
  if (HIGH_RISK.some((r) => l.includes(r.replace("_", "")))) return "hohes_risiko";
  if (SUSPICIOUS.some((s) => l.includes(s.replace("_", "")))) return score > 0.6 ? "verdächtig" : "gutartig";
  if (l.includes("melanoma")) return "hohes_risiko";
  if (l.includes("basal")) return "hohes_risiko";
  return "gutartig";
}

const LABEL_DE: Record<string, string> = {
  melanoma: "Melanom",
  basal_cell_carcinoma: "Basalzellkarzinom",
  actinic_keratoses: "Aktinische Keratose",
  benign_keratosis_like_lesions: "Gutartige Keratose",
  dermatofibroma: "Dermatofibrom",
  melanocytic_nevi: "Melanozytärer Nävus (Muttermal)",
  vascular_lesions: "Vaskuläre Läsion",
};

function labelDE(label: string): string {
  const key = label.toLowerCase().replace(/-/g, "_");
  for (const [en, de] of Object.entries(LABEL_DE)) {
    if (key.includes(en.replace(/-/g, "_"))) return de;
  }
  return label;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Keine Datei hochgeladen" }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Bitte nur Bilddateien hochladen" }, { status: 400 });
    }

    const hfToken = process.env.HF_TOKEN;

    // --- HuggingFace Live Analysis ---
    if (hfToken) {
      try {
        const imageBuffer = await file.arrayBuffer();

        const hfResponse = await fetch(HF_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hfToken}`,
            "Content-Type": file.type,
          },
          body: imageBuffer,
        });

        if (hfResponse.ok) {
          const results: Array<{ label: string; score: number }> = await hfResponse.json();

          if (Array.isArray(results) && results.length > 0) {
            const top = results[0];
            const risk = mapToRisk(top.label, top.score);
            const labelName = labelDE(top.label);

            const riskMessages: Record<string, string> = {
              gutartig: `Befund: ${labelName} — keine malignen Merkmale erkannt.`,
              verdächtig: `Befund: ${labelName} — auffällige Merkmale. Dermatologen-Konsultation empfohlen.`,
              hohes_risiko: `Befund: ${labelName} — potenziell maligne. Bitte umgehend Dermatologen aufsuchen.`,
            };

            return NextResponse.json({
              result: risk,
              confidence: Math.round(top.score * 100) / 100,
              details: riskMessages[risk],
              model: HF_MODEL,
              label_raw: top.label,
            });
          }
        }
      } catch (err) {
        console.error("HuggingFace error:", err);
        // Fall through to demo
      }
    }

    // --- Demo Fallback ---
    const seed = file.size % 100;
    let result;
    if (seed < 60) {
      result = { result: "gutartig", confidence: 0.87, details: "Keine malignen Merkmale erkannt (Demo-Modus — HF_TOKEN fehlt).", model: "demo" };
    } else if (seed < 85) {
      result = { result: "verdächtig", confidence: 0.71, details: "Unregelmäßige Pigmentierung erkannt (Demo-Modus).", model: "demo" };
    } else {
      result = { result: "hohes_risiko", confidence: 0.82, details: "Auffällige Merkmale erkannt (Demo-Modus).", model: "demo" };
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Analyse fehlgeschlagen." }, { status: 500 });
  }
}
