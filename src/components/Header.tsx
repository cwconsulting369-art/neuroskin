"use client";

export default function Header() {
  return (
    <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-blue/20">
            <svg
              className="h-6 w-6 text-medical-blue"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              Neuro<span className="text-medical-blue">Skin</span>
            </h1>
            <p className="text-xs text-gray-400">Hautkrebsfrüherkennung</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-medical-blue/10 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-medical-green animate-pulse" />
          <span className="text-xs text-medical-blue">System aktiv</span>
        </div>
      </div>
    </header>
  );
}
