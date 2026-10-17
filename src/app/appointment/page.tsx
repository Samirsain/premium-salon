import type { Metadata } from "next";
import { AppointmentForm } from "@/components/Forms";
import { ReviewCard } from "@/components/home/Testimonials";
import { Reveal, SlideIn } from "@/components/motion";
import { Button, SectionTitle } from "@/components/ui";
import { appointmentReviews, img } from "@/lib/site";

export const metadata: Metadata = { title: "Book an Appointment" };

const photo = "size-full rounded-[30px] object-cover";

export default function AppointmentPage() {
  return (
    <>
      <section className="px-5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
        <Reveal onLoad>
          <SectionTitle as="h1" tag="Book your visit" title="Schedule an appointment" className="mb-[60px] max-w-[700px]" />
        </Reveal>
        <Reveal onLoad delay={0.2} className="mx-auto max-w-[800px] rounded-[30px] bg-card p-5 md:p-10">
          <AppointmentForm />
        </Reveal>
      </section>

      {/* Reviews marquee */}
      <section className="pb-[100px] lg:pb-[200px]">
        <Reveal className="px-5">
          <SectionTitle
            title="What our patients say"
            text="Real experiences from real people who trusted us with their skin health"
            className="mb-[60px] max-w-[1300px]"
          />
        </Reveal>
        <div className="relative mx-auto max-w-[1300px] overflow-hidden">
          <ul className="flex w-max animate-[marquee-x_45s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
            {[...appointmentReviews, ...appointmentReviews].map((r, i) => (
              <li key={i} aria-hidden={i >= appointmentReviews.length}>
                <ReviewCard r={r} className="h-[262px] w-[320px] md:w-[400px]" />
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(255,255,255,0)_17.5%,rgba(255,255,255,0)_80%,var(--color-bg)_100%)]" />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:pb-[200px]">
        <Reveal className="mx-auto flex max-w-[900px] flex-col gap-[30px] rounded-[30px] bg-card p-[30px] md:flex-row md:items-center md:justify-between md:gap-[50px] md:p-10">
          <div className="flex flex-col gap-2.5">
            <h2 className="t-30">Questions before appointment</h2>
            <p className="max-w-[513px]">Book your consultation today and take the first step towards healthier skin.</p>
          </div>
          <Button href="/contact">Get Started</Button>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle
            title="Confidence starts with healthy skin"
            text="Thoughtfully designed care, trusted by patients worldwide."
            className="mb-[60px] max-w-[700px]"
          />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] gap-5 lg:grid-cols-2">
          <SlideIn x={-80} className="h-[400px] md:h-[646px]">
            <img src={img("2VHcx3gJEpgPMGzbUhLpSNgI4.jpg")} alt="" className={photo} />
          </SlideIn>
          <SlideIn x={80} className="grid grid-rows-2 gap-5">
            <div className="grid grid-cols-2 gap-5">
              <img src={img("Tm9PGLu6q1KOy7jigKdOwfYqs.jpg")} alt="" className={`${photo} h-[200px] md:h-[314px]`} />
              <img src={img("mDxidn5AmRf8QhcmJPlSi1cilJc.jpg")} alt="" className={`${photo} h-[200px] md:h-[314px]`} />
            </div>
            <img src={img("UsImLDaQZ9dwtfh7Za26a1QyE8.jpg")} alt="" className={`${photo} h-[200px] md:h-[312px]`} />
          </SlideIn>
        </div>
      </section>
    </>
  );
}
