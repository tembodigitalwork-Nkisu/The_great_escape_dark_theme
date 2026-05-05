"use client";

import { useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps?q=Longacres+Shopping+Mall+Lusaka&output=embed";

export default function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        title="The Great Escape — Longacres Mall, Lusaka"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Load interactive map of The Great Escape"
      className="absolute inset-0 w-full h-full grid place-items-center dots-soft bg-cream-100 hover:bg-cream-50 transition group"
    >
      <div className="flex flex-col items-center gap-3 text-center px-4">
        <span className="grid place-items-center h-14 w-14 rounded-full bg-escape-yellow border-2 border-ink-950 shadow-popSm group-hover:translate-y-[2px] group-hover:shadow-none transition">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink-950" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <div>
          <p className="font-display font-bold text-ink-950">View on map</p>
          <p className="text-xs text-ink-950/60 mt-1">Tap to load Google Maps</p>
        </div>
      </div>
    </button>
  );
}
