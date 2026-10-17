import { Reveal } from "@/components/motion";
import { icons, img } from "@/lib/site";

// 18 pills around a ring that slowly spins (one turn every 80s).
const pills = [
  ["Acne & Skin Health", "Jvm6ENMcLTrn2S9rqOPXlCQ538M.jpg"],
  ["Chemical Peels", "jSFZ7ROTAOOS0hkJqlUtWsKmKe8.jpg"],
  ["Laser Treatments", "UE0hiu8Gc8M7F2YUVcZ3ePMlsc.jpg"],
  ["Botox & Fillers", "GXrVkAKOuyZ6jsH2mk3ALm0ncw.jpg"],
  ["Skin Rejuvenation", "BpGNqeqsBfGoXmblZ5zbtLzBM.jpg"],
  ["Aging Solutions", "fRkN7RTfKeL08Kpz6CrDLlrDc.jpg"],
  ["Pigmentation Care", "rmaNoowueaeJpAJe2LHvvrc60.jpg"],
  ["Scar Reduction", "gzen5eX2cjNUuGHxoxYDiHqSP9I.jpg"],
  ["Hair Loss Treatment", "V40vRazc9cFurG60JnK0c85s.jpg"],
  ["PRP Therapy", "j6oC7YZz1cfpeQSnSeYsb7iddk4.jpg"],
  ["Hydrafacial", "PyjMSo6pfuPNLWf9DUJPOOnxCng.jpg"],
  ["Microneedling", "jSFZ7ROTAOOS0hkJqlUtWsKmKe8.jpg"],
  ["Skin Brightening", "GXrVkAKOuyZ6jsH2mk3ALm0ncw.jpg"],
  ["Sun Damage Repair", "BpGNqeqsBfGoXmblZ5zbtLzBM.jpg"],
  ["Skin Brightening", "fRkN7RTfKeL08Kpz6CrDLlrDc.jpg"],
  ["Melasma Treatment", "rmaNoowueaeJpAJe2LHvvrc60.jpg"],
  ["PRP Therapy", "1EZhAxM1tjwLB5GmrjQlLPUMYjE.jpg"],
  ["Scar Reduction", "gzen5eX2cjNUuGHxoxYDiHqSP9I.jpg"],
];

export default function Hero() {
  return (
    <section className="px-2.5 pb-[100px] md:px-[30px] md:pb-[200px] lg:px-[50px]">
      <div className="relative flex h-[640px] flex-col items-center overflow-hidden rounded-[30px] pt-[60px] md:h-[760px] md:rounded-[50px] md:pt-[100px] lg:h-[851px]">
        <img
          src={img("nzLcI2gIko5jP7H7JHhs97DQ0.jpg")}
          alt="Woman with healthy, glowing skin"
          className="absolute inset-0 size-full object-cover object-[60%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-dark)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="relative flex max-w-[840px] flex-col items-center gap-5 px-5 text-center">
          <Reveal onLoad delay={0.2}>
            <h1 className="t-90 text-cream [text-shadow:0_2px_24px_rgba(38,24,19,0.45)]">Healthy, confident skin starts here</h1>
          </Reveal>
          <Reveal onLoad delay={0.3}>
            <p className="t-18 max-w-[440px] text-card [text-shadow:0_1px_12px_rgba(38,24,19,0.5)]">
              Advanced dermatology and modern aesthetic treatments designed to improve
            </p>
          </Reveal>
        </div>

        {/* Ring of treatments, centered 60px below the hero's bottom edge */}
        <Reveal onLoad delay={0.5} className="absolute bottom-[-60px] left-1/2 size-0 scale-[0.62] md:scale-[0.85] lg:scale-100">
          <div className="absolute size-0 animate-[spin-slow_80s_linear_infinite]">
            {pills.map(([label, avatar], i) => (
              <div key={i} className="absolute top-0 left-0 size-0" style={{ transform: `rotate(${130 - i * 20}deg)` }}>
                <div className="absolute top-[-30px] right-[205px] flex h-[60px] w-[196px] items-center gap-2.5 rounded-[50px] bg-accent/10 py-2.5 pr-5 pl-2.5 backdrop-blur-[5px]">
                  <img src={img(avatar)} alt="" className="size-10 shrink-0 rounded-full object-cover" />
                  <span className="text-sm whitespace-nowrap text-white">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Notch with the scroll link */}
        <div className="absolute bottom-0 left-1/2 h-[100px] w-[240px] -translate-x-1/2">
          <img src={img("sCtHsVXTYzYfLElkCb3pemCxWfc.svg")} alt="" className="absolute right-[217px] bottom-[-6px] h-[60px] w-[100px]" />
          <img src={img("WTmTjOpsuX2YnTdKMYJEoXSISk.svg")} alt="" className="absolute bottom-[-6px] left-[218px] h-[60px] w-[100px]" />
          <div className="absolute top-0 left-0 size-[240px] rounded-full bg-bg" />
          <a
            href="#service"
            className="relative flex flex-col items-center gap-2 pt-[38px] text-sm text-head transition-opacity hover:opacity-70"
          >
            <img src={icons.flowerHero} alt="" className="size-[18px]" />
            Explore our treatments
          </a>
        </div>
      </div>
    </section>
  );
}
