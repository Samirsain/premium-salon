import Link from "next/link";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import type { Service } from "@/lib/cms";
import { img } from "@/lib/site";

export function ServiceFacts({ s }: { s: Service }) {
  return (
    <dl className="flex gap-[30px]">
      {[
        ["Duration", s.duration],
        ["From", s.from],
        ["Downtime", s.downtime],
      ].map(([k, v]) => (
        <div key={k} className="flex flex-col gap-0.5">
          <dt className="t-18">{k}</dt>
          <dd className="text-sm">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/service/${s.slug}`} className="group flex h-full flex-col rounded-[30px] border border-accent/15 p-2.5">
      <div className="relative h-[260px] overflow-hidden rounded-[20px] md:h-[411px]">
        <img src={s.images[0]} alt={s.title} className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 p-5">
          <div className="glass px-5 py-4">
            <ServiceFacts s={s} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 p-5">
        <h2 className="t-30">{s.title}</h2>
        <p className="t-18">{s.short}</p>
      </div>
    </Link>
  );
}

/** Full-width photo with the "Ready to transform your skin?" call to action. */
export function ReadyCta() {
  return (
    <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
      <Reveal className="relative mx-auto flex min-h-[557px] max-w-[1300px] items-end overflow-hidden rounded-[30px]">
        <img src={img("7wuoJ9Ow11xKedGiaTruAqA2UU.jpg")} alt="" className="absolute inset-0 size-full object-cover object-[70%_center]" />
        <div className="relative flex max-w-[550px] flex-col gap-[30px] p-[30px] md:p-[50px]">
          <div className="flex flex-col gap-2.5">
            <h2 className="t-46 text-white">Ready to transform your skin?</h2>
            <p className="text-white">Schedule a consultation to discuss which treatments are right for you.</p>
          </div>
          <Button href="/appointment">Book an Appointment</Button>
        </div>
      </Reveal>
    </section>
  );
}
