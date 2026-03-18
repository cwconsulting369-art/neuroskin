import Link from "next/link";

export const metadata = {
  title: "Impressum - NeuroSkin",
  description: "Impressum gemaess Paragraph 5 TMG fuer NeuroSkin",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-navy-950">
      <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-blue/20">
              <svg className="h-5 w-5 text-medical-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Neuro<span className="text-medical-blue">Skin</span></span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Zurueck</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Impressum</h1>
        <p className="text-gray-400 text-sm mb-10">Angaben gemaess &sect; 5 TMG und &sect; 18 Abs. 2 MStV</p>

        <div className="space-y-6">
          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-6">
            <h2 className="text-base font-semibold text-white mb-4">Anbieter</h2>
            <div className="space-y-1 text-sm text-gray-300">
              <p className="font-semibold text-white">NeuroSkin</p>
              <p>[Inhaber eintragen]</p>
              <p>[Strasse, Hausnummer]</p>
              <p>[PLZ Ort], Deutschland</p>
            </div>
          </div>

          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-6">
            <h2 className="text-base font-semibold text-white mb-4">Kontakt</h2>
            <p className="text-sm text-gray-300">
              E-Mail: <a href="mailto:kontakt@neuroskin.vercel.app" className="text-medical-blue hover:underline">kontakt@neuroskin.vercel.app</a>
            </p>
          </div>

          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-6">
            <h2 className="text-base font-semibold text-white mb-4">Umsatzsteuer</h2>
            <p className="text-sm text-gray-300">
              Umsatzsteuer-Identifikationsnummer gemaess &sect; 27a UStG:<br />
              <span className="text-white font-mono">[USt-ID eintragen]</span>
            </p>
          </div>

          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-6">
            <h2 className="text-base font-semibold text-white mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <div>
                <p className="font-semibold text-white mb-1">Medizinischer Haftungsausschluss</p>
                <p>NeuroSkin ist <strong className="text-white">kein Medizinprodukt</strong> und ersetzt keine aerztliche Diagnose
                oder Behandlung. Die Ergebnisse der KI-Analyse dienen ausschliesslich zu Informations- und
                Bildungszwecken. Bei Verdacht auf Hauterkrankungen konsultieren Sie bitte einen Dermatologen.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Haftung fuer Inhalte</p>
                <p>Die Inhalte unserer Seiten wurden mit groesster Sorgfalt erstellt. Fuer die Richtigkeit,
                Vollstaendigkeit und Aktualitaet koennen wir jedoch keine Gewaehr uebernehmen.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-6">
            <h2 className="text-base font-semibold text-white mb-4">Streitschlichtung</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:underline">
                ec.europa.eu/consumers/odr
              </a>
              .<br /><br />
              Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 flex gap-4 text-sm">
          <Link href="/datenschutz" className="text-medical-blue hover:underline">Datenschutzerklaerung</Link>
          <Link href="/" className="text-gray-400 hover:text-white">Zurueck zur App</Link>
        </div>
      </main>
    </div>
  );
}
