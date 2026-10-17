import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { contact, icons, img, socials } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "404 Error", href: "/404" },
];
const patientLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
  { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="px-2.5 md:px-[50px]">
      <div className="relative overflow-hidden rounded-t-[30px]">
        <img
          src={img("4gRqLtjxPBtwZmePma4I5n97gcI.jpg")}
          alt=""
          className="absolute inset-x-0 top-0 h-[700px] w-full object-cover object-[70%_center] md:h-full"
        />
        <div className="absolute inset-x-0 top-[360px] bottom-0 bg-[linear-gradient(rgba(253,247,239,0)_0%,var(--color-bg)_52%)]" />

        <div className="relative px-5 pt-[100px] pb-10 md:px-[30px] md:pt-[160px] md:pb-[80px] lg:px-[30px]">
          <Reveal className="mx-auto flex max-w-[1280px] flex-col gap-10">
            <div className="flex max-w-[600px] flex-col gap-5">
              <h2 className="t-70">Transform your skin with us</h2>
              <p className="max-w-[400px] text-head">
                Book a consultation with our dermatology specialists and take the first step toward lasting results.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Button href="/appointment">Book an Appointment</Button>
                <Button href="/service" variant="light">
                  Our Service
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-[180px] grid max-w-[1280px] gap-x-20 gap-y-[60px] md:mt-[130px] md:grid-cols-2 lg:grid-cols-[373px_1fr_373px]">
            <div className="flex flex-col gap-5">
              <Logo />
              <p>Professional dermatology care focused on results, safety, and personalized treatment solutions.</p>
              <div className="flex gap-5 text-sm">
                <span className="flex items-center gap-1.5">
                  <img src={icons.checkSmall} alt="" className="size-[18px]" /> FDA Approved
                </span>
                <span className="flex items-center gap-1.5">
                  <img src={icons.trophy} alt="" className="size-[18px]" /> Board Certified
                </span>
              </div>
            </div>

            <div className="flex gap-[60px] lg:justify-center">
              <LinkColumn title="Quick links" links={quickLinks} />
              <LinkColumn title="Patients" links={patientLinks} />
            </div>

            <div className="flex flex-col gap-5 lg:pl-[50px]">
              <h3 className="t-22">Get in touch</h3>
              <ul className="flex flex-col gap-2.5">
                <ContactRow icon={icons.pin} href="https://maps.google.com/">
                  {contact.address}
                </ContactRow>
                <ContactRow icon={icons.phone} href={`tel:${contact.phone}`}>
                  {contact.phone}
                </ContactRow>
                <ContactRow icon={icons.mail} href={`mailto:${contact.email}`}>
                  {contact.email}
                </ContactRow>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-[100px] flex max-w-[1280px] flex-col items-center gap-6 text-center lg:mt-[130px] lg:flex-row lg:justify-between lg:text-left">
            <p>
              Developed by{" "}
              <a href="https://zenviqdigital.in" target="_blank" rel="noreferrer" className="text-head hover:underline">
                ZENVIQ Digital
              </a>
            </p>
            <ul className="flex gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-9 place-items-center rounded-lg bg-card transition-colors hover:bg-accent/20"
                  >
                    <img src={s.icon} alt="" className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <p>
              © 2026{" "}
              <a href="https://zenviqdigital.in" target="_blank" rel="noreferrer" className="text-head hover:underline">
                ZENVIQ Digital
              </a>
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="t-22">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-head hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon, href, children }: { icon: string; href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="flex items-center gap-2.5 transition-colors hover:text-head">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-card">
          <img src={icon} alt="" className="size-[18px]" />
        </span>
        <span className="max-w-[221px]">{children}</span>
      </a>
    </li>
  );
}
