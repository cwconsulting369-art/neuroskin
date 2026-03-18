"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "neuroskin_consent_v1";

interface ConsentGateProps {
  children: React.ReactNode;
}

export default function ConsentGate({ children }: ConsentGateProps) {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setHasConsent(stored === "true");
  }, []);

  const handleAccept = () => {
    if (!checked) return;
    localStorage.setItem(CONSENT_KEY, "true");
    setHasConsent(true);
  };

  // Still loading from localStorage
  if (hasConsent === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-medical-blue border-t-transparent" />
      </div>
    );
  }

  // Already consented
  if (hasConsent) {
    return <>{children}</>;
  }

  // Show consent screen
  return (
    <div className="flex min-h-screen flex-col bg-navy-950">
      {/* Header */}
      <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-blue/20">
              <svg className="h-6 w-6 text-medical-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Neuro<span className="text-medical-blue">Skin</span></h1>
              <p className="text-xs text-gray-400">Hautkrebsfrüherkennung</p>
            </div>
          </div>
        </div>
      </header>

      {/* Consent Card */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {/* Medical Disclaimer Banner */}
          <div className="mb-6 rounded-xl border border-medical-amber/40 bg-medical-amber/10 p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⚠</span>
              <div>
                <p className="text-sm font-bold text-medical-amber mb-1">
                  NeuroSkin ist kein Medizinprodukt
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Diese Anwendung dient <strong className="text-white">ausschließlich zu Informations- und 
                  Bildungszwecken</strong> und ersetzt keine ärztliche Diagnose oder Behandlung.
                  Bei Verdacht auf Hauterkrankungen konsultieren Sie bitte immer einen Dermatologen.
                </p>
              </div>
            </div>
          </div>

          {/* Consent Card */}
          <div className="rounded-2xl border border-navy-700 bg-navy-900/80 p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-2">Einwilligung erforderlich</h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Um NeuroSkin nutzen zu können, müssen Sie der Verarbeitung Ihrer Daten zustimmen. 
              Ihr Hautbild wird <strong className="text-white">ausschließlich für die Analyse verwendet</strong> und 
              danach sofort gelöscht — keine dauerhafte Speicherung.
            </p>

            {/* Data Processing Info */}
            <div className="mb-6 space-y-2">
              <InfoRow icon="🔬" text="Ihr Bild wird nur kurzzeitig zur KI-Analyse verarbeitet" />
              <InfoRow icon="🗑" text="Sofortige Löschung nach der Analyse" />
              <InfoRow icon="🔒" text="Verschlüsselte Übertragung via HTTPS" />
              <InfoRow icon="❌" text="Kein Tracking, keine Marketing-Cookies" />
            </div>

            {/* Consent Checkbox */}
            <label className={`flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-colors mb-6 ${
              checked 
                ? "border-medical-blue/50 bg-medical-blue/10" 
                : "border-navy-600 bg-navy-800/50 hover:border-navy-500"
            }`}>
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checked ? "bg-medical-blue border-medical-blue" : "border-gray-500 bg-navy-800"
                }`}>
                  {checked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-300 leading-relaxed">
                Ich habe die{" "}
                <Link href="/datenschutz" target="_blank" className="text-medical-blue hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Gesundheitsdaten (Hautbilder) 
                gemäß Art. 9 Abs. 2 lit. a DSGVO zu. Ich verstehe, dass NeuroSkin kein 
                Medizinprodukt ist und keine ärztliche Diagnose ersetzt.
              </span>
            </label>

            {/* Accept Button */}
            <button
              onClick={handleAccept}
              disabled={!checked}
              className={`w-full rounded-xl py-3 px-6 text-sm font-semibold transition-all duration-200 ${
                checked
                  ? "bg-medical-blue text-white hover:bg-medical-blue/90 shadow-lg shadow-medical-blue/20 cursor-pointer"
                  : "bg-navy-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              {checked ? "Einwilligung bestätigen & NeuroSkin starten" : "Bitte Checkbox ankreuzen"}
            </button>

            <p className="mt-4 text-xs text-gray-500 text-center">
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Browser-Cache löschen.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <span>·</span>
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoRow({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-300">
      <span className="text-base w-6 text-center flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
