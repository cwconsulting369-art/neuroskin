"use client";

interface AnalysisResultProps {
  result: {
    result: "gutartig" | "verdächtig" | "hohes_risiko";
    confidence: number;
    details: string;
    model: string;
  };
}

const riskConfig = {
  gutartig: {
    label: "Gutartig",
    icon: "\u2713",
    color: "text-medical-green",
    bg: "bg-medical-green/10",
    border: "border-medical-green/30",
    barColor: "bg-medical-green",
  },
  "verdächtig": {
    label: "Verdächtig",
    icon: "\u26A0",
    color: "text-medical-amber",
    bg: "bg-medical-amber/10",
    border: "border-medical-amber/30",
    barColor: "bg-medical-amber",
  },
  hohes_risiko: {
    label: "Hohes Risiko",
    icon: "\u2717",
    color: "text-medical-red",
    bg: "bg-medical-red/10",
    border: "border-medical-red/30",
    barColor: "bg-medical-red",
  },
};

export default function AnalysisResult({ result }: AnalysisResultProps) {
  const config = riskConfig[result.result];
  const confidencePercent = Math.round(result.confidence * 100);

  return (
    <div className="space-y-4">
      {/* Risk Badge */}
      <div
        className={`rounded-xl border ${config.border} ${config.bg} p-6`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-2xl ${config.color}`}>{config.icon}</span>
            <div>
              <h3 className={`text-xl font-bold ${config.color}`}>
                {config.label}
              </h3>
              <p className="text-sm text-gray-400">{result.details}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-3xl font-bold ${config.color}`}>
              {confidencePercent}%
            </p>
            <p className="text-xs text-gray-400">Konfidenz</p>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-navy-900">
            <div
              className={`h-full rounded-full ${config.barColor} transition-all duration-1000 ease-out`}
              style={{ width: `${confidencePercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Model Info */}
      {result.model === "demo" && (
        <div className="rounded-lg border border-navy-700 bg-navy-800/50 px-4 py-2">
          <p className="text-xs text-gray-500">
            Demo-Modus: Ergebnisse sind simuliert. Setzen Sie HF_TOKEN für
            echte KI-Analyse.
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="rounded-lg border border-medical-amber/20 bg-medical-amber/5 p-4">
        <div className="flex gap-2">
          <span className="text-medical-amber">{"\u26A0"}</span>
          <p className="text-sm text-medical-amber/80">
            Dies ist kein medizinischer Befund. Konsultieren Sie einen Arzt.
          </p>
        </div>
      </div>
    </div>
  );
}
