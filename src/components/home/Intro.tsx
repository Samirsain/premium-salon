import { Reveal, WordsReveal } from "@/components/motion";
import { Tag } from "@/components/ui";
import { icons, img } from "@/lib/site";

const inlineIcon = (src: string) => <img src={img(src)} alt="" className="inline-block size-[0.83em]" />;

export default function Intro() {
  return (
    <section className="pb-[100px] md:pb-[200px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[30px] px-5 md:px-[50px] lg:px-[100px]">
        {/* The text stays pinned while the photos scroll over it */}
        <div className="sticky top-[120px] flex flex-col items-center gap-[30px] lg:top-[200px]">
          <Reveal>
            <Tag>Expert care for every skin journey</Tag>
          </Reveal>
          <WordsReveal
            className="t-46 max-w-[1056px] text-center font-serif text-head"
            parts={[
              "We combine medical dermatology with advanced aesthetic",
              inlineIcon("X7o0CVk1NDnfipMUrc5RPZi0ns.svg"),
              "treatments to help you achieve clear, healthy, and naturally",
              inlineIcon("cACpRq3wYZ7auDJdl5LuRIcEA0.png"),
              "radiant skin.",
            ]}
          />
          <Reveal className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-full bg-accent text-sm text-white">5.0</span>
            <span className="flex flex-col gap-1 text-sm">
              <img src={icons.stars} alt="5 stars" className="w-[70px]" />
              86+ Reviews from clients
            </span>
          </Reveal>
        </div>

        <div className="relative z-10 flex flex-col gap-[80px] md:gap-[150px]">
          <div className="flex items-start justify-between">
            <img
              src={img("bxWl7NQ8Cya6sHR7IukfwXk.jpg")}
              alt="Facial mask treatment"
              className="aspect-[310/400] w-[46%] max-w-[310px] rounded-[20px] object-cover"
            />
            <video
              src="/videos/mww0b259vrYwL2JdYyaRBhDy0.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="mt-[35px] aspect-[280/330] w-[40%] max-w-[280px] rounded-[20px] object-cover"
            />
          </div>
          <div className="flex items-start justify-between">
            <img
              src={img("jX3tct42RCHYXcUFxRMkDfAEdTk.jpg")}
              alt="Portrait with radiant skin"
              className="mt-[5px] aspect-[184/210] w-[36%] max-w-[184px] rounded-[20px] object-cover"
            />
            <img
              src={img("azUXPD7iJOKsfqLM48TJJitzBCs.jpg")}
              alt="Woman touching her face"
              className="aspect-[330/220] w-[52%] max-w-[330px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
