"use client";

import Link from "next/link";

export default function Disclaimer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900/80">
      <div className="mx-auto max-w-5xl px-6 py-6">
        {/* Main Disclaimer */}
        <div className="mb-4 rounded-xl border border-medical-amber/20 bg-medical-amber/5 px-5 py-4">
          <p className="text-sm text-gray-300 text-center leading-relaxed">
            <span className="text-medical-amber font-semibold">⚠ Medizinischer Haftungsausschluss:</span>{" "}
            NeuroSkin ist <strong className="text-white">kein Medizinprodukt</strong> und ersetzt keine professionelle 
            ärztliche Diagnose oder Behandlung. Die KI-Analyse dient ausschließlich zu{" "}
            <strong className="text-white">Informations- und Bildungszwecken</strong>. Bei Verdacht auf Hauterkrankungen 
            konsultieren Sie bitte immer einen zugelassenen Dermatologen.
          </p>
        </div>

        {/* Links + Copyright */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">
              Datenschutzerklärung
            </Link>
            <span>·</span>
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">
              Impressum
            </Link>
            <span>·</span>
            <span>Daten werden nicht gespeichert</span>
          </div>
          <p className="text-xs text-gray-600">
            © 2026 NeuroSkin – Informationswerkzeug, kein Medizinprodukt – Prototyp / Pre-MDR
          </p>
        </div>
      </div>
    </footer>
  );
}
