import type { Metadata } from "next";
import { Odometer, Reveal } from "@/components/motion";
import { ReadyCta, ServiceCard } from "@/components/service";
import { SectionTitle, Stars } from "@/components/ui";
import { services } from "@/lib/cms";
import { icons, img } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

const checks = [
  "Consultation workflow: Booking & reminders verified",
  "Treatment safety: FDA-approved protocols validated",
  "Patient records: Secure data & privacy confirmed",
  "Follow-up care: Post-treatment support enabled",
];

const steps = [
  ["01", "Consultation", "Discuss your concerns and goals"],
  ["02", "Analysis", "Comprehensive skin assessment"],
  ["03", "Treatment", "Personalized care plan"],
];

const card = "relative overflow-hidden rounded-[30px] bg-card";

export default function ServicesPage() {
  return (
    <>
      <section className="px-2.5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[150px]">
        <Reveal onLoad>
          <SectionTitle
            as="h1"
            tag="Personalized dermatology care"
            title="Treatments tailored to your skin"
            text="From medical dermatology to advanced cosmetic treatments, we offer comprehensive solutions for all your skin health needs."
            className="mb-[60px] max-w-[900px]"
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.1} y={60}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-2.5 pb-[100px] md:px-[30px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle tag="Benefits" title="Expert care, proven results" className="mb-[60px] max-w-[600px]" />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-[447fr_913fr]">
          <Reveal className={`${card} h-[460px] lg:h-auto`}>
            <img src={img("zwZmpQEwUFvIocUMqNKOmr02sC8.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass flex flex-col items-center gap-5 p-[30px] text-center">
                <img src={icons.flowerWhite} alt="" className="size-6" />
                <h3 className="t-22 max-w-[300px] text-white">Performed by licensed dermatology experts</h3>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-[353fr_540fr]">
              <Reveal className={`${card} flex flex-col items-center gap-[30px] p-[30px] text-center`}>
                <h3 className="t-30 max-w-[240px]">Board-certified experts</h3>
                <div className="relative grid h-[70px] w-[162px] place-items-center">
                  <img src={img("a5Kgi5WpwsydAChd328uIr4gB6I.svg")} alt="" className="absolute inset-0 size-full" />
                  <img src={img("1EZhAxM1tjwLB5GmrjQlLPUMYjE.jpg")} alt="" className="relative size-10 rounded-full object-cover" />
                </div>
                <p className="max-w-[240px]">Our team of dermatologists and specialists</p>
              </Reveal>
              <Reveal className={`${card} min-h-[304px]`}>
                <div className="flex flex-col gap-2.5 p-[30px]">
                  <h3 className="t-30">Advanced technology</h3>
                  <p className="max-w-[440px]">We use the latest FDA-approved equipment and techniques for safe, effective treatments.</p>
                </div>
                <img src={img("HcwBqWjnj50hNIVdoZYRVO3inRk.svg")} alt="" className="absolute bottom-0 left-0 w-full" />
              </Reveal>
            </div>

            <div className="grid gap-5 md:grid-cols-[540fr_353fr]">
              <Reveal className={`${card} flex flex-col gap-10 p-[30px]`}>
                <ul className="grid grid-cols-2 gap-5 rounded-[20px] bg-white p-5">
                  {checks.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-sm text-head">
                      <img src={icons.checkSmall} alt="" className="mt-0.5 size-4 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-[60px] text-accent">
                  {[
                    ["10+", "Years"],
                    ["2K+", "Patients"],
                    ["50+", "Treatments"],
                  ].map(([v, l]) => (
                    <div key={l} className="flex flex-col gap-1">
                      <Odometer value={v} className="font-serif text-[30px] text-head" />
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal className={`${card} flex flex-col items-center justify-center gap-2.5 p-[30px] text-center`}>
                <Stars />
                <p className="t-46 font-serif text-head">99%</p>
                <p className="text-sm">Happy customer across country</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-2.5 pb-[100px] md:px-[30px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle tag="Our process" title="Your treatment journey" className="mb-5 max-w-[800px]" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([n, title, text], i) => (
            <Reveal key={n} delay={i * 0.15} y={60} className="flex flex-col">
              <div className="relative z-10 flex h-[100px] items-end justify-center">
                <span className="t-30 font-serif text-head">{n}</span>
              </div>
              <div className="relative flex flex-col items-center gap-2.5 rounded-[20px] bg-card px-5 pt-20 pb-[30px] text-center">
                <img src={img("fNEXd7IOTreGpEhHXvRIItrvTs.svg")} alt="" className="absolute -top-12 left-1/2 w-[140px] -translate-x-1/2" />
                <h3 className="t-30">{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ReadyCta />
    </>
  );
}
