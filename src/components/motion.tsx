"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Framer's appear effect for this template: fade in, slide up 80px, scale from 0.9.
const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 80,
  scale = 0.9,
  duration = 2,
  onLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  /** Animate on mount instead of when scrolled into view (hero content). */
  onLoad?: boolean;
}) {
  const to = { opacity: 1, y: 0, x: 0, scale: 1 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      {...(onLoad ? { animate: to } : { whileInView: to, viewport: { once: true, amount: 0.2 } })}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Slide in horizontally (used by the bento hands and two-column sections). */
export function SlideIn({
  children,
  className,
  x,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  x: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Words fade up one after another; inline nodes (icons) are kept in place. */
export function WordsReveal({ parts, className }: { parts: (string | React.ReactNode)[]; className?: string }) {
  const tokens = parts.flatMap((p) => (typeof p === "string" ? p.split(" ").filter(Boolean) : [p]));
  return (
    <motion.p
      className={`flex flex-wrap justify-center gap-x-[0.22em] gap-y-2.5 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {tokens.map((t, i) => (
        <motion.span
          key={i}
          className="inline-flex items-center"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
          }}
        >
          {t}
        </motion.span>
      ))}
    </motion.p>
  );
}

/** Odometer-style counter: each digit rolls up from 0 when scrolled into view ("2K+", "98%"). */
export function Odometer({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <span ref={ref} className={`inline-flex leading-none ${className}`} aria-label={value}>
      {[...value].map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} aria-hidden className="inline-block h-[1em] overflow-hidden">
            <motion.span
              className="flex flex-col"
              initial={{ y: 0 }}
              animate={{ y: inView ? `-${+ch}em` : 0 }}
              transition={{ duration: 1.6, delay: i * 0.1, ease }}
            >
              {"0123456789".split("").map((d) => (
                <span key={d} className="h-[1em]">
                  {d}
                </span>
              ))}
            </motion.span>
          </span>
        ) : (
          <span key={i} aria-hidden>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
