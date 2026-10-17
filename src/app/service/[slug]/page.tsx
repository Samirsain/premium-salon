import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentForm } from "@/components/Forms";
import { Reveal, SlideIn } from "@/components/motion";
import { ReadyCta } from "@/components/service";
import { Button, SectionTitle, Tag } from "@/components/ui";
import { services } from "@/lib/cms";
import { icons } from "@/lib/site";

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/service/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: PageProps<"/service/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug);

  return (
    <>
      <section className="px-5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-2.5">
          <Reveal onLoad className="flex flex-col justify-between gap-[60px] lg:gap-[150px]">
            <div className="flex flex-col gap-5">
              <Tag>Cosmetic treatment</Tag>
              <h1 className="t-90 max-w-[600px]">{s.title}</h1>
              <p>{s.short}</p>
              <Button href="/appointment" className="mt-5">
                Book an Appointment
              </Button>
            </div>
            <dl className="flex flex-wrap gap-x-[30px] gap-y-4">
              {[
                ["Duration", s.duration],
                ["From", s.from],
                ["Downtime", s.downtime],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1.5">
                  <dt className="t-22 font-serif text-head">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal onLoad delay={0.2} className="h-[360px] overflow-hidden rounded-[30px] md:h-[554px]">
            <img src={s.images[0]} alt={s.title} className="size-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-[900px] flex-col gap-[100px] px-5 pb-[100px] md:px-[30px] lg:pb-[180px]">
        <Reveal className="prose-cms" y={40} scale={1}>
          <div dangerouslySetInnerHTML={{ __html: s.expect }} />
        </Reveal>

        <Reveal y={40} scale={1} className="flex flex-col gap-5">
          <div className="prose-cms" dangerouslySetInnerHTML={{ __html: s.whoFor }} />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-[20px] bg-card p-[30px]">
              <h3 className="t-22">Who can benefit</h3>
              <div className="prose-cms [&_ul]:mb-0" dangerouslySetInnerHTML={{ __html: s.benefit }} />
            </div>
            <img src={s.benefitImage} alt="" className="h-[231px] w-full rounded-[20px] object-cover md:h-full" />
          </div>
        </Reveal>

        <Reveal y={40} scale={1} className="grid overflow-hidden rounded-[30px] bg-card md:grid-cols-2">
          <img src={s.areasImage} alt="" className="h-[260px] w-full object-cover md:h-full" />
          <div className="flex flex-col gap-5 p-[30px]">
            <h2 className="t-46">Treatment areas</h2>
            <ul className="flex flex-wrap gap-2.5">
              {s.areas.map((a) => (
                <li key={a.name} className="flex items-center gap-2 rounded-[30px] bg-white py-1 pr-3 pl-1 text-sm">
                  <img src={a.image} alt="" className="size-[30px] rounded-full object-cover" />
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal>
            <SectionTitle tag="Book your visit" title="Book appointment" size="t-46" className="max-w-[700px]" />
          </Reveal>
          <Reveal y={40} scale={1} className="rounded-[30px] bg-card p-5 md:p-10">
            <AppointmentForm />
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          <Reveal>
            <SectionTitle tag="Expert-led care" title="Explore more treatments" size="t-46" className="max-w-[700px]" />
          </Reveal>
          <SlideIn x={60}>
            <ul className="flex flex-col">
              {others.map((o) => (
                <li key={o.slug} className="border-b border-accent/15 py-2.5">
                  <Link href={`/service/${o.slug}`} className="group relative flex items-start gap-5 rounded-[20px] p-5 md:p-[30px]">
                    <span className="grid size-[60px] shrink-0 place-items-center rounded-[10px] bg-white">
                      <img src={o.icon} alt="" className="size-[30px]" />
                    </span>
                    <span className="flex flex-1 flex-col gap-2.5">
                      <span className="t-30 font-serif text-head">{o.title}</span>
                      <span className="max-w-[466px]">{o.short}</span>
                    </span>
                    <img
                      src={o.images[0]}
                      alt=""
                      className="pointer-events-none absolute top-1/2 right-[120px] hidden h-[168px] w-[152px] -translate-y-1/2 scale-75 -rotate-6 rounded-[20px] object-cover opacity-0 transition duration-500 ease-out-expo group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100 md:block"
                    />
                    <span className="grid size-[34px] shrink-0 place-items-center rounded-full bg-white transition-transform duration-500 group-hover:rotate-45">
                      <img src={icons.arrowUpRight} alt="" className="size-6" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </SlideIn>
        </div>
      </section>

      <ReadyCta />
    </>
  );
}
