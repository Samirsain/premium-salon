import { Reveal, SlideIn } from "@/components/motion";
import { Button, SectionTitle, Stars } from "@/components/ui";
import BeforeAfter from "./BeforeAfter";
import { icons, img, shortReviews } from "@/lib/site";

const card = "relative overflow-hidden rounded-[30px] bg-card";

function ReviewTicker() {
  return (
    <div className="relative h-[390px] overflow-hidden">
      <ul className="flex animate-[marquee-y_20s_linear_infinite] flex-col gap-2.5 hover:[animation-play-state:paused]">
        {[...shortReviews, ...shortReviews].map((r, i) => (
          <li key={i} className="flex flex-col gap-4 rounded-[20px] bg-white p-5 text-sm" aria-hidden={i >= shortReviews.length}>
            <div className="flex flex-col gap-1.5">
              <Stars className="w-[60px]" />
              <p>{r.text}</p>
            </div>
            <div className="flex items-center justify-between gap-2.5">
              <div>
                <p className="text-head">{r.name}</p>
                <p>{r.role}</p>
              </div>
              <img src={r.avatar} alt="" className="size-[38px] rounded-full object-cover" />
            </div>
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--color-card)_0%,rgba(255,255,255,0)_15%,rgba(255,255,255,0)_80%,var(--color-card)_100%)]" />
    </div>
  );
}

export default function Bento() {
  return (
    <section className="px-2.5 py-[100px] md:px-[30px] lg:px-[70px] lg:py-[200px]">
      <Reveal>
        <SectionTitle tag="Why patients choose us" title="Care that puts your child first" className="mb-[50px] max-w-[600px]" />
      </Reveal>

      <div className="mx-auto grid max-w-[1300px] gap-5 lg:grid-cols-[420px_1fr]">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          <Reveal className={`${card} h-[480px] md:h-[563px]`}>
            <BeforeAfter before={img("KLz3YY5GDbbEwOvVSAqGFLXE0eI.jpg")} after={img("mtj5hoiyHHRIFp2NkDEtYGmM.jpg")} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <div className="glass flex flex-col gap-2.5 p-[30px]">
                <h3 className="t-26 text-white">Real results, real patients</h3>
                <div className="flex gap-[30px]">
                  <span className="flex items-center gap-2.5">
                    <img src={icons.calendar} alt="" className="size-4" /> 12 Weeks
                  </span>
                  <span className="flex items-center gap-2.5">
                    <img src={icons.sparkle} alt="" className="size-4" /> Acne treatment
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className={`${card} flex flex-col items-center gap-5 px-[30px] py-11 text-center`}>
            <div className="relative grid size-[50px] place-items-center">
              <img src={icons.badge} alt="" className="absolute inset-0" />
              <span className="relative text-xs text-head">FREE</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="t-30">Skin analysis</h3>
              <p>Expert consultation at no cost</p>
            </div>
            <Button href="/appointment">Book now</Button>
          </Reveal>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          <div className="grid gap-5 md:grid-cols-[473fr_367fr]">
            <Reveal className={`${card} flex h-[281px] flex-col`}>
              <h3 className="t-30 max-w-[330px] px-[30px] pt-[30px] pb-5">Seamless client experience</h3>
              {/* Natural aspect ratio (no fixed height), so the hands are never cropped at any width */}
              <div className="relative mt-auto flex items-start">
                <SlideIn x={-60} className="w-1/2">
                  <img src={img("n8OzbYcYaueWCQCfguvevnR3o.png")} alt="Hand reaching out" className="block h-auto w-full" />
                </SlideIn>
                <SlideIn x={60} className="w-1/2 pt-[15%]">
                  <img src={img("wvDPYhnwJe8k3MekkKP9OyZlICg.png")} alt="Gloved hand reaching back" className="block h-auto w-full" />
                </SlideIn>
              </div>
            </Reveal>

            <Reveal className={`${card} h-[281px] px-[30px] pt-[30px]`}>
              <h3 className="t-46">10+</h3>
              <p className="mt-2.5">Years of medical excellence</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm">
                <li className="w-fit rounded-[20px] bg-white px-2.5 py-[5px]">2,000+ Procedures</li>
                <li className="w-fit rounded-[20px] bg-white px-2.5 py-[5px]">50+ Treatments</li>
              </ul>
              <p className="absolute right-0 -bottom-4 left-0 text-center font-serif text-[78px] leading-none whitespace-nowrap text-head opacity-10">
                Since 2016
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-[473fr_367fr]">
            <div className="flex flex-col gap-5">
              <Reveal className={`${card} flex flex-col items-center gap-5 p-[30px] text-center`}>
                <div className="flex items-center">
                  <img src={img("hpCeYxp9YhmeNk4SNFOzNVe8M.jpg")} alt="" className="-mr-5 size-[78px] rounded-full object-cover" />
                  <img src={img("nWwBecntKvGpTzePQeixjCY7Yo.jpg")} alt="" className="relative size-[110px] rounded-full border-4 border-card object-cover" />
                  <img src={img("o6sbNkCl3ZL3Bu5h6q6yPPVOX8.jpg")} alt="" className="-ml-5 size-[78px] rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="t-30">Tailored to your vision</h3>
                  <p className="mx-auto max-w-[240px]">Customized treatment plans for every skin type and concern</p>
                </div>
              </Reveal>
              <Reveal className={`${card} h-[272px]`}>
                <video
                  src="/videos/U7eWy10v7FhA88xMZeWxPMq0c.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="size-full object-cover"
                />
              </Reveal>
            </div>

            <Reveal className={`${card} flex flex-col gap-[30px] p-[30px]`}>
              <div className="flex flex-col items-center text-center">
                <Stars />
                <p className="t-46 font-serif text-head">99%</p>
                <p>2k+ Global trusted customers</p>
              </div>
              <ReviewTicker />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
