import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklaerung - NeuroSkin",
  description: "Datenschutzerklaerung gemaess DSGVO fuer die NeuroSkin-Webanwendung",
};

export default function Datenschutz() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Datenschutzerklaerung</h1>
        <p className="text-gray-400 text-sm mb-8">Stand: Maerz 2026 - Gemaess DSGVO Art. 13 und Art. 14</p>

        <div className="mb-8 rounded-xl border border-medical-amber/30 bg-medical-amber/10 p-5">
          <p className="text-sm font-semibold text-medical-amber mb-1">Wichtiger Hinweis</p>
          <p className="text-sm text-gray-300">
            NeuroSkin ist <strong className="text-white">kein Medizinprodukt</strong> und ersetzt keine aerztliche Diagnose.
            Die Anwendung dient ausschliesslich zu Informations- und Bildungszwecken.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">1. Verantwortlicher</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-1">
            <p className="font-semibold text-white">NeuroSkin</p>
            <p>Betreiber: [Name eintragen]</p>
            <p>Adresse: [Adresse eintragen]</p>
            <p>[PLZ Ort], Deutschland</p>
            <p>E-Mail: <a href="mailto:kontakt@neuroskin.vercel.app" className="text-medical-blue hover:underline">kontakt@neuroskin.vercel.app</a></p>
            <p>USt-ID: [USt-ID eintragen]</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">2. Welche Daten wir verarbeiten</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-navy-800/50 border border-navy-700 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-sm font-semibold text-white">Bilddateien (Gesundheitsdaten nach Art. 9 DSGVO)</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 flex-shrink-0">Hochrisiko</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Das von Ihnen hochgeladene Hautbild wird ausschliesslich fuer die KI-Analyse verwendet.
                Es wird nicht gespeichert und nach der Analyse sofort geloescht (transiente Verarbeitung).
              </p>
            </div>
            <div className="rounded-lg bg-navy-800/50 border border-navy-700 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-sm font-semibold text-white">Technische Nutzungsdaten</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 flex-shrink-0">Standard</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                IP-Adresse, Browser-Typ, Betriebssystem, Uhrzeit des Zugriffs.
                Diese Daten werden von unserer Hosting-Infrastruktur (Vercel) automatisch erhoben.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">3. Rechtsgrundlage der Verarbeitung</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Die Verarbeitung Ihrer Gesundheitsdaten (Hautbilder) erfolgt auf Grundlage Ihrer{" "}
            <strong className="text-white">ausdruecklichen Einwilligung</strong> gemaess Art. 6 Abs. 1 lit. a DSGVO
            i.V.m. Art. 9 Abs. 2 lit. a DSGVO. Sie koennen Ihre Einwilligung jederzeit widerrufen,
            indem Sie den Browser-Cache loeschen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">4. Datenspeicherung und Loeschung</h2>
          <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 mb-4">
            <p className="text-sm text-green-400 font-semibold mb-1">Keine dauerhafte Datenspeicherung</p>
            <p className="text-sm text-gray-300">
              NeuroSkin speichert keine Bilddateien. Ihr Hautbild wird ausschliesslich waehrend
              der Analyse verarbeitet und danach sofort geloescht.
            </p>
          </div>
          <p className="text-gray-300 text-sm">
            Technische Zugriffslogdaten werden von Vercel fuer maximal 30 Tage gespeichert.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">5. Auftragsverarbeiter und Drittanbieter</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-navy-800/50 border border-navy-700 p-4">
              <p className="text-sm font-semibold text-white mb-1">Vercel Inc.</p>
              <p className="text-xs text-gray-400 mb-1">Zweck: Hosting der Webanwendung</p>
              <p className="text-xs text-gray-400 mb-2">Standort: USA (mit Standardvertragsklauseln, Art. 46 DSGVO) - Serverless Functions: Frankfurt (fra1)</p>
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-medical-blue hover:underline">Datenschutzerklaerung Vercel</a>
            </div>
            <div className="rounded-lg bg-navy-800/50 border border-navy-700 p-4">
              <p className="text-sm font-semibold text-white mb-1">Hugging Face Inc.</p>
              <p className="text-xs text-gray-400 mb-1">Zweck: KI-Modell zur Bildanalyse (Auftragsverarbeiter)</p>
              <p className="text-xs text-gray-400 mb-2">Standort: USA (Datenverarbeitungsvertrag gemaess Art. 28 DSGVO)</p>
              <a href="https://huggingface.co/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-medical-blue hover:underline">Datenschutzerklaerung Hugging Face</a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">6. Ihre Rechte</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Auskunft ueber Ihre gespeicherten Daten (Art. 15 DSGVO)",
              "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
              "Loeschung Ihrer Daten (Art. 17 DSGVO)",
              "Einschraenkung der Verarbeitung (Art. 18 DSGVO)",
              "Datenuebertragbarkeit (Art. 20 DSGVO)",
              "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              "Widerruf Ihrer Einwilligung jederzeit (Art. 7 Abs. 3 DSGVO)",
              "Beschwerde bei einer Aufsichtsbehoerde (Art. 77 DSGVO) - z.B. BayLDA",
            ].map((right) => (
              <li key={right} className="flex items-start gap-2">
                <span className="text-medical-blue mt-0.5 flex-shrink-0">-&gt;</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-navy-700">7. Cookies und lokale Speicherung</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            NeuroSkin speichert Ihre Einwilligung im <strong className="text-white">localStorage</strong> Ihres Browsers.
            Diese Information verlaesst Ihr Geraet nicht. Tracking-Cookies werden nicht eingesetzt.
          </p>
        </section>

        <div className="mt-10 pt-6 border-t border-navy-700 flex gap-4 text-sm">
          <Link href="/impressum" className="text-medical-blue hover:underline">Impressum</Link>
          <Link href="/" className="text-gray-400 hover:text-white">Zurueck zur App</Link>
        </div>
      </main>
    </div>
  );
}
