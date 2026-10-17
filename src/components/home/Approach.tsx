import { Reveal, SlideIn } from "@/components/motion";
import { Button, Tag } from "@/components/ui";
import { icons, img } from "@/lib/site";

export function IconList({ items }: { items: [icon: string, text: string][] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map(([icon, text]) => (
        <li key={text} className="flex items-center gap-2.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white">
            <img src={icon} alt="" className="size-[26px]" />
          </span>
          <span className="t-18">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Approach() {
  return (
    <section className="px-2.5 md:px-[30px] lg:px-[50px]">
      <div className="rounded-[30px] bg-card px-2.5 py-[100px] md:px-[30px] lg:py-[160px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[60px] lg:grid-cols-2">
          <SlideIn x={-80} className="relative h-[460px] overflow-hidden rounded-[30px] md:h-[639px]">
            <img src={img("GxQO8asItSl76Fw0bPEJgPjibvI.jpg")} alt="Dr. Priyanka" className="size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-5">
              <div className="glass flex items-start justify-between p-5 md:p-[30px]">
                <div className="flex flex-col gap-2.5">
                  <h3 className="t-30 text-white">Dr. Priyanka</h3>
                  <p>Dermatologist &amp; Aesthetic Specialist</p>
                </div>
                <img src={icons.flowerWhite} alt="" className="size-6" />
              </div>
            </div>
          </SlideIn>

          <Reveal className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-2.5">
              <Tag>Excellence in skin care</Tag>
              <h2 className="t-70">A clinic committed</h2>
              <p className="max-w-[540px]">
                We believe good skin starts with understanding. Every treatment begins with a detailed consultation, a
                long-term plan, and science-backed care.
              </p>
            </div>
            <IconList
              items={[
                [icons.science, "Advanced science-backed treatment methods"],
                [icons.shield, "A highly skilled and certified expert team"],
                [icons.care, "Personalized care tailored to your unique skin"],
              ]}
            />
            <Button href="/about">Our Approach</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
