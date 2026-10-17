"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  // Several answers can be open at once, like the original.
  const [open, setOpen] = useState([0]);
  const toggle = (i: number) => setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i]);
  return (
    <ul className="flex flex-col gap-5">
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <li key={it.q} className={`rounded-[20px] transition-colors duration-500 ${isOpen ? "bg-card" : "bg-cream"}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="flex w-full cursor-pointer items-center justify-between gap-2.5 p-5 text-left"
            >
              <span className="t-22 font-serif text-head">{it.q}</span>
              <span
                className={`relative grid size-[30px] shrink-0 place-items-center rounded-full transition-[background-color,rotate] duration-500 ${isOpen ? "rotate-45 bg-white" : "bg-transparent"}`}
              >
                <span className="absolute h-[1.5px] w-4 bg-accent" />
                <span className="absolute h-4 w-[1.5px] bg-accent" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="min-h-0 overflow-hidden px-5">
                <span className="block max-w-[700px] pb-5">{it.a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
