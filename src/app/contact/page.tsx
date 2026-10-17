import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { ContactForm } from "@/components/Forms";
import { Reveal, SlideIn } from "@/components/motion";
import { SectionTitle } from "@/components/ui";
import { contactFaqs, icons, img } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const hours = [
  ["Monday - Friday", "9:00 AM - 6:00 PM"],
  ["Saturday", "10:00 AM - 4:00 PM"],
  ["Sunday", "Closed"],
];

const clinics = [
  {
    name: "Radiant skin clinic",
    address: "2410 Coral Way, Suite 204 Miami, FL 33145 United States",
    phone: "+1 (305) 442-9810",
    image: "tMaJuL3XiOulIhaeDTj027U2Ppw.jpg",
  },
  {
    name: "Dermaluxe aesthetics",
    address: "12 Kensington High Street, Level 3 London W8 4PF United Kingdom",
    phone: "+44 20 3868 5124",
    image: "Ot1qAM78OBPfZnmPPriQntP0EEk.jpg",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-2.5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
        <Reveal onLoad>
          <SectionTitle as="h1" title="Get in touch" className="mb-[60px] max-w-[700px]" />
        </Reveal>
        <Reveal onLoad delay={0.2} className="grid gap-[50px] rounded-[30px] bg-card p-5 md:p-[50px] lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h2 className="t-46">We’re here to help you</h2>
            <ContactForm />
          </div>
          <div className="relative min-h-[526px] overflow-hidden rounded-[20px]">
            <img src={img("qE9IlV0hzakG1NCpKNxe8adSak.jpg")} alt="Dermatologist smiling" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass flex flex-col gap-5 p-[30px]">
                <h3 className="t-22 text-white">Clinic hours</h3>
                <dl className="grid grid-cols-2 gap-y-5">
                  {hours.map(([d, h]) => (
                    <div key={d} className="contents">
                      <dt>{d}</dt>
                      <dd>{h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle title="Find our clinic" text="123 Medical Plaza, Suite 200, New York, NY 10001" className="mb-[60px] max-w-[700px]" />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] gap-5 md:grid-cols-2">
          {clinics.map((c, i) => (
            <SlideIn key={c.name} x={i ? 80 : -80} className="relative h-[542px] overflow-hidden rounded-[20px]">
              <img src={img(c.image)} alt={c.name} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="glass flex flex-col gap-[30px] p-[30px]">
                  <div className="flex items-center justify-between gap-2.5">
                    <h3 className="t-22 text-white">{c.name}</h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(c.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex shrink-0 items-center gap-1.5 hover:underline"
                    >
                      View on map <img src={icons.mapArrow} alt="" className="size-5" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="flex items-center gap-3">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/30">
                        <img src={icons.pinWhite} alt="" className="size-6" />
                      </span>
                      {c.address}
                    </p>
                    <a href={`tel:${c.phone}`} className="flex items-center gap-3 hover:underline">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/30">
                        <img src={icons.phoneRound} alt="" className="size-6" />
                      </span>
                      {c.phone}
                    </a>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </section>

      <section className="px-5 pb-[100px] md:px-[30px] lg:pb-[200px]">
        <Reveal className="mx-auto flex max-w-[800px] flex-col gap-[60px]">
          <h2 className="t-60 text-center">Quick ways to connect</h2>
          <Faq items={contactFaqs} />
        </Reveal>
      </section>
    </>
  );
}
