"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/ui";

type Item = { slug: string; title: string; short: string; icon: string; images: string[] };

export function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative grid size-[30px] shrink-0 place-items-center rounded-full bg-white">
      <span className="absolute h-0.5 w-3.5 rounded bg-accent" />
      <span className={`absolute h-3.5 w-0.5 rounded bg-accent transition-transform duration-300 ${open ? "scale-y-0" : ""}`} />
    </span>
  );
}

export default function Treatments({ services }: { services: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="service" className="scroll-mt-20 px-2.5 pb-[100px] md:px-[30px] md:pb-[200px]">
      <Reveal>
        <SectionTitle tag="Services" title="Our treatments" className="mb-[50px] max-w-[800px]" />
      </Reveal>
      <div className="flex flex-col gap-5">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={s.slug} y={40} scale={1}>
              <div
                className={`rounded-[30px] border border-accent/15 transition-colors duration-500 ${isOpen ? "bg-card" : "bg-bg"}`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(isOpen ? null : i))}
                  className="flex cursor-pointer gap-2.5 p-5 md:p-[30px] lg:p-[50px]"
                >
                  <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:gap-2.5">
                    <div className="flex flex-1 flex-col gap-2.5 lg:flex-row lg:items-start">
                      <img src={s.icon} alt="" className="size-[34px] md:size-[50px]" />
                      <h3 className="t-46">{s.title}</h3>
                    </div>
                    <div className="flex flex-col gap-4 lg:w-[440px]">
                      <p className="t-18 max-w-[400px]">{s.short}</p>
                      <Link
                        href={`/service/${s.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-fit rounded-[30px] border border-head/60 bg-card px-5 py-2.5 text-sm transition-colors hover:bg-head hover:text-white"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                  <PlusMinus open={isOpen} />
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-out-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid gap-5 px-5 pb-5 md:grid-cols-3 md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
                      {s.images.map((src) => (
                        <img key={src} src={src} alt={s.title} className="h-[200px] w-full rounded-[20px] object-cover lg:h-[256px]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
