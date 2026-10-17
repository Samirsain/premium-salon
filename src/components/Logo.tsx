import { img } from "@/lib/site";

/** Flower mark from the template's logo + the brand name set in the heading serif. */
export default function Logo({ className = "text-[26px]" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.35em] font-serif leading-none whitespace-nowrap text-head ${className}`}>
      <img src={img("logo-mark.svg")} alt="" className="size-[0.95em]" />
      Zen Salon
    </span>
  );
}
