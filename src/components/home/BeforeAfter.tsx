"use client";

import { useState } from "react";

const chip = "absolute top-6 rounded-md border border-white/25 bg-white/50 px-4 py-1.5 text-sm text-head";

export default function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(51);
  return (
    <div className="absolute inset-0">
      <img src={after} alt="After treatment" className="absolute inset-0 size-full object-cover" />
      <img
        src={before}
        alt="Before treatment"
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className={`${chip} left-6`}>Before</span>
      <span className={`${chip} right-6`}>After</span>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-white/70" style={{ left: `${pos}%` }}>
        <span className="absolute top-[44%] left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full border border-white/25 bg-white/40 backdrop-blur-sm">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 1 1 7l5 6M16 1l5 6-5 6" />
          </svg>
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(+e.target.value)}
        aria-label="Compare before and after"
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
