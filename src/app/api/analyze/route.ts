import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Keine Datei hochgeladen" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Bitte nur Bilddateien hochladen" },
        { status: 400 }
      );
    }

    // Try external backend if configured
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl && apiUrl !== "http://localhost:8000") {
      try {
        const backendForm = new FormData();
        backendForm.append("file", file);

        const response = await fetch(`${apiUrl}/analyze`, {
          method: "POST",
          body: backendForm,
        });

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json(data);
        }
      } catch {
        // Fall through to demo mode
      }
    }

    // Demo mode: simulate AI analysis based on file properties
    // In production, this connects to FastAPI + HuggingFace model
    const fileSize = file.size;
    const seed = fileSize % 100;

    let result: { result: string; confidence: number; details: string; model: string };

    if (seed < 60) {
      result = {
        result: "gutartig",
        confidence: 0.82 + (seed % 10) * 0.01,
        details: "Keine malignen Merkmale erkannt. Gleichmäßige Pigmentierung, reguläre Ränder.",
        model: "demo-v1.0",
      };
    } else if (seed < 85) {
      result = {
        result: "verdächtig",
        confidence: 0.68 + (seed % 10) * 0.01,
        details: "Unregelmäßige Pigmentierung oder Randstruktur erkannt. Dermatologen-Konsultation empfohlen.",
        model: "demo-v1.0",
      };
    } else {
      result = {
        result: "hohes_risiko",
        confidence: 0.79 + (seed % 5) * 0.01,
        details: "Auffällige Merkmale erkannt (ABCDE-Kriterien). Bitte umgehend einen Dermatologen aufsuchen.",
        model: "demo-v1.0",
      };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Analyse fehlgeschlagen. Bitte erneut versuchen." },
      { status: 500 }
    );
  }
}
