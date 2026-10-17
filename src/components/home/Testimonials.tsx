"use client";

import { useState } from "react";
import { Reveal, SlideIn } from "@/components/motion";
import { Stars } from "@/components/ui";
import { icons, img, reviews } from "@/lib/site";

export function ReviewCard({ r, className = "" }: { r: (typeof reviews)[number]; className?: string }) {
  return (
    <div className={`flex shrink-0 flex-col justify-between gap-6 rounded-[30px] bg-white p-[30px] ${className}`}>
      <div className="flex flex-col gap-1.5">
        <Stars className="w-[63px]" />
        <p className="max-w-[318px]">{r.text}</p>
      </div>
      <div className="flex items-center gap-2.5 text-sm">
        <img src={r.avatar} alt="" className="size-10 rounded-full object-cover" />
        <div>
          <p className="text-head">{r.name}</p>
          <p>{r.role}</p>
        </div>
      </div>
    </div>
  );
}

function Arrow({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous review" : "Next review"}
      className="grid size-10 cursor-pointer place-items-center rounded-full bg-white transition-transform hover:scale-105"
    >
      <img src={dir === "prev" ? icons.arrowLeft : icons.arrowRight} alt="" className="size-9" />
    </button>
  );
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = reviews.length;
  const go = (d: number) => setI((i + d + n) % n);

  return (
    <section className="bg-card px-5 py-[100px] md:px-[30px] lg:px-[70px] lg:py-[200px]">
      <div className="mx-auto grid max-w-[1300px] items-end gap-[60px] lg:grid-cols-[764px_354px] lg:justify-between">
        <Reveal className="flex min-w-0 flex-col gap-[50px]">
          <div className="flex items-end justify-between gap-5">
            <h2 className="t-70 max-w-[533px]">What our patients say</h2>
            <div className="flex shrink-0 gap-2.5">
              <Arrow dir="prev" onClick={() => go(-1)} />
              <Arrow dir="next" onClick={() => go(1)} />
            </div>
          </div>
          <div className="overflow-hidden">
            <ul
              className="flex gap-5 transition-transform duration-700 ease-out-expo"
              style={{ transform: `translateX(calc(${-i} * (min(372px, 85vw) + 20px)))` }}
            >
              {[...reviews, ...reviews].map((r, k) => (
                <li key={k}>
                  <ReviewCard r={r} className="h-[236px] w-[min(372px,85vw)]" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <SlideIn x={80} className="relative h-[430px] overflow-hidden rounded-[30px]">
          <img src={img("ipAbYHifCDoQsFyitpmqxk7yTIQ.jpg")} alt="" className="size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="glass flex flex-col items-center gap-2.5 p-[30px] text-center">
              <p className="font-serif text-[46px] leading-none text-white">4.9</p>
              <img src={icons.starsWhite} alt="5 stars" className="w-[54px]" />
              <p className="text-xs uppercase">Clients rating</p>
              <div className="mt-2.5 flex">
                {["j6oC7YZz1cfpeQSnSeYsb7iddk4.jpg", "LqVEUHTKH3ne9xvRQ3DozHOPY.jpg", "PyjMSo6pfuPNLWf9DUJPOOnxCng.jpg", "V40vRazc9cFurG60JnK0c85s.jpg"].map((a) => (
                  <img key={a} src={img(a)} alt="" className="-mr-2 size-9 rounded-full border-2 border-white object-cover last:mr-0" />
                ))}
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
