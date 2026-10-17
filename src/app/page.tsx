import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Treatments from "@/components/home/Treatments";
import Approach from "@/components/home/Approach";
import Bento from "@/components/home/Bento";
import Support from "@/components/home/Support";
import Testimonials from "@/components/home/Testimonials";
import { BlogFeature, BlogRow } from "@/components/blog";
import { AppointmentForm } from "@/components/Forms";
import Faq from "@/components/Faq";
import { Reveal, SlideIn } from "@/components/motion";
import { Button, SectionTitle, Tag } from "@/components/ui";
import { blogs, services } from "@/lib/cms";
import { contact, homeFaqs, icons, img } from "@/lib/site";

export default function Home() {
  const [featured, ...rest] = blogs;
  return (
    <>
      <Hero />
      <Intro />
      <Treatments services={services.map(({ slug, title, short, icon, images }) => ({ slug, title, short, icon, images }))} />
      <Approach />
      <Bento />
      <Support />
      <Testimonials />

      {/* Blog */}
      <section className="px-5 py-[100px] md:px-[30px] lg:px-[70px] lg:py-[200px]">
        <Reveal>
          <SectionTitle tag="Skin insights" title="Helpful tips and expert advice" className="mb-[50px] max-w-[600px]" />
        </Reveal>
        <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-2">
          <SlideIn x={-80}>
            <BlogFeature blog={featured} />
          </SlideIn>
          <SlideIn x={80} className="flex flex-col gap-5">
            {rest.slice(0, 3).map((b) => (
              <BlogRow key={b.slug} blog={b} />
            ))}
          </SlideIn>
        </div>
      </section>

      {/* Appointment */}
      <section className="px-2.5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <Reveal className="mx-auto grid max-w-[1300px] overflow-hidden rounded-[30px] bg-card lg:grid-cols-2">
          <div className="flex flex-col gap-[50px] p-5 md:p-[50px]">
            <div className="flex flex-col gap-2.5">
              <h2 className="t-46">Request an appointment</h2>
              <p>Fill out the form below, and we’ll contact you shortly.</p>
            </div>
            <AppointmentForm variant="short" />
          </div>
          <div className="relative min-h-[460px]">
            <img src={img("vZWId5rca0iP0PQazENoHugDL5c.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass flex flex-col items-center gap-2.5 p-[30px] text-center">
                <img src={icons.flowerWhite} alt="" className="size-6" />
                <h3 className="t-22 mt-2.5 text-white">General inquiries</h3>
                <a href={`tel:${contact.inquiriesPhone}`} className="flex items-center gap-1.5 hover:underline">
                  <img src={icons.phoneWhite} alt="" className="size-4" /> {contact.inquiriesPhone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:underline">
                  <img src={icons.mailWhite} alt="" className="size-4" /> {contact.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
        <div className="mx-auto grid max-w-[1300px] gap-[60px] lg:grid-cols-2 lg:gap-[100px]">
          <SlideIn x={-80} className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-2.5">
              <Tag>FAQs</Tag>
              <h2 className="t-60">Frequently asked questions</h2>
            </div>
            <StillHaveQuestions />
          </SlideIn>
          <Reveal>
            <Faq items={homeFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function StillHaveQuestions() {
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[30px]">
      <img src={img("7wxUbyXdrvKzr2E5Hjt9SxhRN8.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="glass flex flex-col gap-5 p-[30px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5">
            <h3 className="t-22 text-white">Still have questions?</h3>
            <p className="max-w-[240px] text-sm">Our team is here to help. Get in touch for personalized answers.</p>
          </div>
          <Button href="/contact" variant="light">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}
