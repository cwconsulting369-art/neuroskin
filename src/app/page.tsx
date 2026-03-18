"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import AnalysisResult from "@/components/AnalysisResult";
import Disclaimer from "@/components/Disclaimer";

interface AnalysisResponse {
  result: "gutartig" | "verdächtig" | "hohes_risiko";
  confidence: number;
  details: string;
  model: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] =
    useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Fehler: ${response.status}`);
      }

      const data: AnalysisResponse = await response.json();
      setAnalysisResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ein unbekannter Fehler ist aufgetreten"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              KI-gestützte{" "}
              <span className="text-medical-blue">
                Hautkrebsfrüherkennung
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Laden Sie ein Bild Ihrer Hautveränderung hoch und erhalten Sie
              eine sofortige KI-basierte Einschätzung. Schnell, vertraulich und
              rund um die Uhr verfügbar.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "\u26A1", text: "Sofortige Analyse" },
              { icon: "\uD83D\uDD12", text: "Datenschutzkonform" },
              { icon: "\uD83E\uDDE0", text: "KI-Technologie" },
            ].map((feature) => (
              <span
                key={feature.text}
                className="flex items-center gap-1.5 rounded-full bg-navy-800 px-3 py-1.5 text-sm text-gray-300"
              >
                <span>{feature.icon}</span>
                {feature.text}
              </span>
            ))}
          </div>
        </section>

        {/* Upload & Results Section */}
        <section className="mx-auto max-w-2xl px-6 pb-16">
          <div className="space-y-6">
            <ImageUploader onUpload={handleUpload} isLoading={isLoading} />

            {error && (
              <div className="rounded-xl border border-medical-red/30 bg-medical-red/10 p-4">
                <p className="text-sm text-medical-red">{error}</p>
              </div>
            )}

            {analysisResult && <AnalysisResult result={analysisResult} />}
          </div>
        </section>
      </main>

      <Disclaimer />
    </div>
  );
}
