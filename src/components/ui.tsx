import Link from "next/link";
import { icons } from "@/lib/site";

export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2.5 rounded-[30px] bg-accent/6 px-3 py-1.5 text-xs uppercase text-tag ${className}`}
    >
      <span className="size-[5px] rounded-full bg-tag" />
      {children}
    </div>
  );
}

const btnVariants = {
  primary: "bg-accent text-white",
  soft: "bg-card text-body",
  light: "bg-bg text-body",
};

/** Pill button with the round flower badge, as used across the template. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof btnVariants;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className={`group inline-flex h-11 w-fit items-center gap-2.5 rounded-[30px] py-2.5 pr-5 pl-2.5 text-sm whitespace-nowrap transition-[filter] hover:brightness-95 ${btnVariants[variant]} ${className}`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-white transition-transform duration-500 ease-out-expo group-hover:rotate-180">
        <img src={variant === "primary" ? icons.flower : icons.flowerDark} alt="" className="size-3" />
      </span>
      {children}
    </Link>
  );
}

export function SubmitButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      type="submit"
      className={`group inline-flex h-11 w-fit cursor-pointer items-center gap-2.5 rounded-[30px] bg-accent py-2.5 pr-5 pl-2.5 text-sm text-white transition-[filter] hover:brightness-95 ${className}`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-white transition-transform duration-500 ease-out-expo group-hover:rotate-180">
        <img src={icons.flower} alt="" className="size-3" />
      </span>
      {children}
    </button>
  );
}

export function Stars({ className = "w-[70px]", white = false }: { className?: string; white?: boolean }) {
  return <img src={white ? icons.starsWhite : icons.stars} alt="5 stars" className={className} />;
}

/** Centered section header: tag + serif title (+ optional text). */
export function SectionTitle({
  tag,
  title,
  text,
  as: H = "h2",
  size = H === "h1" ? "t-90" : "t-70",
  className = "max-w-[800px]",
}: {
  tag?: string;
  title: React.ReactNode;
  text?: string;
  as?: "h1" | "h2";
  size?: string;
  /** Include a max-w-* here; defaults to 800px. */
  className?: string;
}) {
  return (
    <div className={`mx-auto flex flex-col items-center gap-2.5 text-center ${className}`}>
      {tag && <Tag>{tag}</Tag>}
      <H className={size}>{title}</H>
      {text && <p className="t-18 max-w-[700px]">{text}</p>}
    </div>
  );
}
