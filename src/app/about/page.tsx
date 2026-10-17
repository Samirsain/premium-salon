import type { Metadata } from "next";
import { Odometer, Reveal, SlideIn } from "@/components/motion";
import { SectionTitle, Tag } from "@/components/ui";
import ZenviqBanner from "@/components/ZenviqBanner";
import { IconList } from "@/components/home/Approach";
import { icons, img, socials } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const marquee = ["PkmFUGsYiqaAfqmIFqDqwXrF8A.jpg", "9fB0e0Y0Ea04a7fHcwum76erEo.jpg", "cGhPkqaYX3buEz2jhVsHzZOJ7Y.jpg", "zbOGvMAj5SsdNhwChlajlZ5pXxg.jpg"];

const stats = [
  ["10+", "Years"],
  ["2K+", "Patients"],
  ["98%", "Success"],
  ["50+", "Treatments"],
];

const features: [title: string, text: string, icon: string][] = [
  ["Personalized treatment plans", "Revive radiance, stimulate collagen, and reveal clearer, smoother-looking skin.", "zeZWiGht1a7HNhWUWuqqAJrNY0.svg"],
  ["Medical-grade safety", "Advanced laser solutions for smooth, long-lasting hair removal.", "4DhDY5AnBDeFxJR5l6HdIwCOtvQ.svg"],
  ["Transparent recommendations", "Subtle enhancements that refresh your features without changing who you are.", "8G3HvK6BGhXA93K3E6ezxL2noXI.svg"],
  ["Comforting environment", "Target lines, volume loss, dullness, and tired skin with safe, proven treatments.", "d9fRCaLS9TCIezR6Gx12sF1JdvA.svg"],
];

const clinic = [
  "asJRAaJW2bLQ7lizwbTPRk8SBeY.jpg",
  "JtFxiiP1BalAFpme5yHUfDuQE0.jpg",
  "5CEtk68UoqsYPlUVGaCJJerWVI.jpg",
  "SnBraUBUCpYhMFVfHJiR7v1updk.jpg",
  "Hp8kbfAJTDGWtNL1t5Qg7n9Zpos.jpg",
  "jt3yOG78GaaiFwAd3QyNAgPGStA.jpg",
];

const team = [
  ["Dr. Samir, MD", "Dermatologist", "r1M6SYzSgfsIvXzRVfnje8e5XOg.jpg"],
  ["Dr. Olivia Reynolds", "Clinic Operations", "zVd86xR6bHqzmuu5TQlB9Sg3cs.jpg"],
  ["Jessica Brown", "Lead Aesthetician", "TNx8UDzvxrXtk8h6DJjXEbZR6FU.jpg"],
  ["Dr. Sophia Williams", "Care Coordinator", "AFw3MQWtE3MN990D7A5KY0Odfg.jpg"],
];

function Feature({ title, text, icon, align }: { title: string; text: string; icon: string; align: "left" | "right" }) {
  return (
    <div className={`flex items-start gap-5 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="grid size-[70px] shrink-0 place-items-center rounded-[10px] bg-white">
        <img src={img(icon)} alt="" className="size-10" />
      </span>
      <div className="flex flex-col gap-2.5">
        <h3 className="t-22">{title}</h3>
        <p className="t-18">{text}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-[100px] md:pt-[80px] lg:pb-[200px]">
        <Reveal onLoad className="flex flex-col gap-5 px-5 md:px-[30px]">
          <Tag>About our clinic</Tag>
          <h1 className="t-90 max-w-[1104px]">A modern approach to beautiful, healthy skin</h1>
          <p className="t-18 max-w-[700px]">
            We combine advanced dermatology with aesthetic expertise to deliver results that look natural, feel
            confident, and support long-term skin health.
          </p>
        </Reveal>
        <Reveal onLoad delay={0.2} className="relative mt-[60px] overflow-hidden md:mx-[30px]">
          <div className="flex w-max animate-[marquee-x_40s_linear_infinite] gap-5">
            {[...marquee, ...marquee].map((src, i) => (
              <img key={i} src={img(src)} alt="" className="h-[300px] w-[270px] rounded-[20px] object-cover md:h-[450px] md:w-[400px]" />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(255,255,255,0)_17.5%,rgba(255,255,255,0)_77%,var(--color-bg)_100%)]" />
        </Reveal>
      </section>

      {/* Founder */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <div className="mx-auto grid max-w-[1300px] items-center gap-[60px] lg:grid-cols-2">
          <SlideIn x={-80} className="relative h-[480px] overflow-hidden rounded-[30px] md:h-[650px]">
            <img src={img("bbV2ZnwvWCE7WhUWK0haXgongac.jpg")} alt="Dr. Priyanka" className="size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass flex items-center justify-between p-[30px]">
                <h3 className="t-22 text-white">Founder &amp; Lead Dermatologist</h3>
                <img src={icons.flowerWhite} alt="" className="size-6" />
              </div>
            </div>
          </SlideIn>
          <Reveal className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="t-70">Dr. Priyanka</h2>
                <h3 className="t-22">Dermatologist &amp; aesthetic specialist</h3>
              </div>
              <p>
                Board-certified dermatologist with over 20 years of experience in medical and cosmetic dermatology.
                Specializes in anti-aging treatments, skin cancer prevention, and advanced laser procedures. Published
                researcher and frequent speaker at dermatology conferences.
              </p>
              <p>
                Her philosophy is simple: understand the person, treat the skin condition, and enhance natural beauty
                without compromise.
              </p>
            </div>
            <IconList
              items={[
                [icons.science, "Board certified dermatologist"],
                [icons.shield, "10+ years clinical experience"],
                [icons.care, "Advanced aesthetic training"],
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <Reveal className="relative mx-auto h-[557px] max-w-[1300px] overflow-hidden rounded-[30px]">
          <img src={img("4LZ1TecdJNrCdktR53o56r1Lv4.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[300px] bg-[linear-gradient(rgba(38,24,19,0),rgba(38,24,19,0.55))]" />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-[30px] p-[30px] pb-[60px] md:grid-cols-4 md:gap-[50px]">
            {stats.map(([v, l]) => (
              <div key={l} className="flex flex-col items-center gap-1 text-white">
                <Odometer value={v} className="font-serif text-[46px] md:text-[70px]" />
                <span>{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How we care */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle
            title="How we care for you"
            text="We combine advanced dermatology with aesthetic expertise to deliver results that look natural, feel confident, and support long-term skin health."
            className="mb-[60px] max-w-[700px]"
          />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] items-end gap-[60px] lg:grid-cols-[1fr_393px_1fr]">
          <SlideIn x={-80} className="flex flex-col gap-[60px]">
            <Feature title={features[0][0]} text={features[0][1]} icon={features[0][2]} align="right" />
            <Feature title={features[1][0]} text={features[1][1]} icon={features[1][2]} align="right" />
          </SlideIn>
          <Reveal className="mx-auto h-[420px] w-full max-w-[393px] overflow-hidden rounded-[200px] md:h-[512px]">
            <video src="/videos/mww0b259vrYwL2JdYyaRBhDy0.mp4" autoPlay muted loop playsInline className="size-full object-cover" />
          </Reveal>
          <SlideIn x={80} className="flex flex-col gap-[60px]">
            <Feature title={features[2][0]} text={features[2][1]} icon={features[2][2]} align="left" />
            <Feature title={features[3][0]} text={features[3][1]} icon={features[3][2]} align="left" />
          </SlideIn>
        </div>
      </section>

      {/* Clinic gallery */}
      <section className="bg-card px-5 py-[100px] md:px-[30px] lg:px-[70px] lg:py-[200px]">
        <Reveal>
          <SectionTitle tag="Excellence in every detail" title="Designed for comfort, privacy, and care" className="mb-[60px] max-w-[800px]" />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clinic.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.1} y={40} className="h-[298px] overflow-hidden rounded-[20px] bg-cream">
              <img src={img(src)} alt="Clinic interior" className="size-full object-cover transition-transform duration-700 ease-out-expo hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-5 py-[100px] md:px-[30px] lg:px-[70px] lg:py-[200px]">
        <Reveal>
          <SectionTitle tag="Meet the experts" title="Our expert team" className="mb-[60px] max-w-[800px]" />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role, photo], i) => (
            <Reveal key={name} delay={i * 0.1} y={40} className="group flex flex-col gap-5">
              <div className="relative aspect-square overflow-hidden rounded-[20px]">
                <img src={img(photo)} alt={name} className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                <ul className="absolute bottom-5 left-5 flex translate-y-4 gap-2.5 opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  {socials.slice(0, 3).map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer" aria-label={`${name} on ${s.label}`} className="grid size-9 place-items-center rounded-lg bg-white">
                        <img src={s.icon} alt="" className="size-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="t-22">{name}</h3>
                <p>{role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-[100px]">
          <ZenviqBanner />
        </div>
      </section>
    </>
  );
}
