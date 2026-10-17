import { SlideIn } from "@/components/motion";
import { Tag } from "@/components/ui";
import { icons, img } from "@/lib/site";

const conditions = ["Acne and breakouts", "Chronic skin conditions", "Eczema and dermatitis", "Pigmentation concerns"];

export default function Support() {
  return (
    <section className="px-5 pb-[100px] md:px-[30px] lg:px-[70px] lg:pb-[200px]">
      <div className="mx-auto grid max-w-[1300px] items-center gap-[60px] lg:grid-cols-2">
        <SlideIn x={-80} className="flex flex-col justify-between gap-[60px] lg:h-[447px] lg:py-6">
          <div className="flex flex-col gap-2.5">
            <Tag>Medical dermatology</Tag>
            <h2 className="t-46 max-w-[480px]">Science-backed care for all skin conditions</h2>
            <p className="max-w-[460px]">
              From acne and eczema to pigmentation, psoriasis, and chronic skin concerns, our dermatologists provide
              accurate diagnosis, long-term treatment plans, and ongoing support.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-5">
            {conditions.map((c) => (
              <li key={c} className="t-18 flex items-start gap-2.5">
                <img src={icons.check} alt="" className="size-[22px] shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </SlideIn>

        <SlideIn x={80} className="relative h-[447px] overflow-hidden rounded-[30px]">
          <img src={img("x5bU5fSGGaNxXqI2iAQqSZi8nA4.jpg")} alt="Dermatologist examining a patient" className="size-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full max-w-[340px] p-[18px]">
            <div className="glass flex flex-col gap-4 p-6">
              <img src={icons.chat} alt="" className="size-8" />
              <h3 className="t-22 text-white">24/7 consultation support available</h3>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
