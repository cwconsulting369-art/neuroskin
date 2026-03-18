"use client";

export default function Disclaimer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900/80">
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-gray-400">
            <span className="text-medical-amber">{"\u26A0"}</span>{" "}
            <strong>Haftungsausschluss:</strong> Diese Anwendung dient
            ausschließlich zu Informationszwecken und ersetzt keine
            professionelle medizinische Diagnose.
          </p>
          <p className="text-xs text-gray-500">
            Kein medizinischer Ersatz - Bei Verdacht immer einen Dermatologen
            konsultieren.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            &copy; 2026 NeuroSkin - Prototyp
          </p>
        </div>
      </div>
    </footer>
  );
}
