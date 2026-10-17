import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/components/blog";
import { Reveal } from "@/components/motion";
import { legalPages } from "@/lib/cms";

export const generateStaticParams = () => legalPages.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/legal-pages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  return p ? { title: p.title } : {};
}

export default async function LegalPage({ params }: PageProps<"/legal-pages/[slug]">) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <section className="px-5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
      <Reveal onLoad className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
        <h1 className="t-90">{page.title}</h1>
        <p>
          Last updated: <span className="text-head">{formatDate(page.date)}</span>
        </p>
      </Reveal>
      <div className="prose-cms mx-auto mt-[60px] max-w-[640px]" dangerouslySetInnerHTML={{ __html: page.content }} />
    </section>
  );
}
