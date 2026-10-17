"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui";

const field =
  "h-[50px] w-full rounded-[10px] bg-cream px-3 text-head outline-none placeholder:text-head/50 focus:ring-1 focus:ring-accent/40";
const therapies = ["Acne Care", "Anti-Aging", "Laser Treatment", "Botox & Fillers", "Skin Consultation"];

function Field({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <label className={`flex flex-col gap-2.5 text-sm ${wide ? "md:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

function Select({ name }: { name: string }) {
  return (
    <div className="relative">
      <select name={name} required defaultValue="" className={`${field} cursor-pointer appearance-none invalid:text-head/50`}>
        <option value="" disabled>
          Select
        </option>
        {therapies.map((t) => (
          <option key={t} className="text-head">
            {t}
          </option>
        ))}
      </select>
      <svg className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#633b2c" strokeWidth="1.5">
        <path d="m1 1.5 5 5 5-5" />
      </svg>
    </div>
  );
}

function Consent({ text }: { text: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-sm">
      <input type="checkbox" required className="mt-px size-5 shrink-0 cursor-pointer accent-accent" />
      {text}
    </label>
  );
}

function useSubmit() {
  const [sent, setSent] = useState(false);
  // ponytail: no backend yet, the form only confirms on screen. Hook it to an API route or form service to receive requests.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return { sent, onSubmit };
}

const Thanks = () => (
  <p role="status" className="rounded-[10px] bg-accent/10 px-4 py-3 text-sm text-head">
    Thank you! We’ve received your request and will contact you shortly.
  </p>
);

/** `short`: homepage version (help text). `full`: appointment page version (date, time, notes). */
export function AppointmentForm({ variant = "full" }: { variant?: "short" | "full" }) {
  const { sent, onSubmit } = useSubmit();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
        <Field label="Name*">
          <input name="name" required placeholder="Your name" className={field} />
        </Field>
        <Field label="Email*">
          <input name="email" type="email" required placeholder="Email address" className={field} />
        </Field>
        <Field label="Phone*">
          <input name="phone" type="tel" required placeholder="Phone number" className={field} />
        </Field>
        <Field label="Therapy*">
          <Select name="therapy" />
        </Field>
        {variant === "full" && (
          <>
            <Field label="Date *">
              <input name="date" type="date" required className={field} />
            </Field>
            <Field label="Time *">
              <input name="time" type="time" required className={field} />
            </Field>
          </>
        )}
        <Field label={variant === "full" ? "Notes" : "How we can help?"} wide>
          <textarea
            name="notes"
            placeholder={variant === "full" ? "Additional notes" : "Type here"}
            className={`${field} h-[100px] resize-y py-3`}
          />
        </Field>
      </div>
      <Consent text="I agree to allow the clinic to contact me regarding my appointment." />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SubmitButton>Book an appointment</SubmitButton>
        {variant === "short" && <p className="text-sm">We’ll reply within 24–48h.</p>}
      </div>
      {sent && <Thanks />}
    </form>
  );
}

export function ContactForm() {
  const { sent, onSubmit } = useSubmit();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name*">
          <input name="name" required placeholder="Your name" className={field} />
        </Field>
        <Field label="Email*">
          <input name="email" type="email" required placeholder="Email address" className={field} />
        </Field>
        <Field label="Phone*">
          <input name="phone" type="tel" required placeholder="Phone number" className={field} />
        </Field>
        <Field label="Subject*">
          <input name="subject" required placeholder="Subject" className={field} />
        </Field>
        <Field label="How we can help?" wide>
          <textarea name="message" placeholder="Type your message here..." className={`${field} h-[100px] resize-y py-3`} />
        </Field>
      </div>
      <label className="flex cursor-pointer items-start gap-2.5 text-sm">
        <input type="checkbox" className="mt-px size-5 shrink-0 cursor-pointer accent-accent" />
        I&apos;d like to receive updates about treatments, skincare tips, and special offers.
      </label>
      <button
        type="submit"
        className="h-[46px] w-full cursor-pointer rounded-[50px] bg-accent text-sm text-white transition-[filter] hover:brightness-95"
      >
        Submit
      </button>
      {sent && <Thanks />}
    </form>
  );
}
