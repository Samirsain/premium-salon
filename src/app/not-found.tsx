import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="px-5 pt-10 pb-[110px] md:pt-[80px]">
      <Reveal onLoad className="mx-auto flex max-w-[640px] flex-col items-center gap-[60px] text-center">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-serif text-[120px] leading-none text-head md:text-[200px]">404</h1>
          <h2 className="t-30">Page not found</h2>
          <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
        </div>
        <Button href="/">Back to home</Button>
      </Reveal>
    </section>
  );
}
