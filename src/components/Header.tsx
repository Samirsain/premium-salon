"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { icons, nav } from "@/lib/site";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path.startsWith(href));

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Slide away while scrolling down, come back on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 104);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg transition-transform duration-500 ease-out-expo ${hidden && !open ? "-translate-y-full" : ""}`}
    >
      {/* Desktop */}
      <nav className="hidden h-[104px] grid-cols-3 items-center px-[30px] lg:grid">
        <ul className="flex gap-1">
          {nav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-[30px] px-2.5 py-1 transition-colors hover:text-accent ${isActive(path, l.href) ? "bg-accent/10 text-accent" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="justify-self-center" aria-label="Zen Salon home">
          <Logo className="text-[28px]" />
        </Link>
        <AppointmentLink className="justify-self-end" label="Book Appointment" />
      </nav>

      {/* Tablet / mobile */}
      <div className="flex h-14 items-center justify-between gap-2 px-4 sm:px-5 lg:hidden">
        <Link href="/" aria-label="Zen Salon home">
          <Logo className="text-[22px] sm:text-[24px]" />
        </Link>
        <div className="flex items-center gap-2">
          <AppointmentLink label="Appointment" small />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative grid size-9 cursor-pointer place-items-center rounded-full bg-head"
          >
            <span className={`absolute h-0.5 w-4 rounded bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`} />
            <span className={`absolute h-0.5 w-4 rounded bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`} />
          </button>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="flex min-h-0 flex-col gap-1 px-5">
          {nav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-3 font-serif text-2xl text-head ${isActive(path, l.href) ? "bg-accent/10" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="h-4" />
        </ul>
      </div>
    </header>
  );
}

function AppointmentLink({ label, small, className = "" }: { label: string; small?: boolean; className?: string }) {
  return (
    <Link
      href="/appointment"
      className={`group flex w-fit items-center gap-2.5 rounded-[30px] bg-card text-sm text-body ${small ? "h-9 py-1.5 pr-3 pl-1.5 max-[359px]:pr-1.5" : "h-11 py-2.5 pr-5 pl-2.5"} ${className}`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-white transition-transform duration-500 ease-out-expo group-hover:rotate-180">
        <img src={icons.flowerDark} alt="" className="size-3" />
      </span>
      <span className={small ? "max-[359px]:sr-only" : ""}>{label}</span>
    </Link>
  );
}
