import type { Metadata } from "next";
import { BlogCard } from "@/components/blog";
import LoadMore from "@/components/LoadMore";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/ui";
import { blogs } from "@/lib/cms";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <section className="px-5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
      <Reveal onLoad>
        <SectionTitle as="h1" tag="Read tips, insights, and stories." title="Skin care blogs" className="mb-[60px] max-w-[700px]" />
      </Reveal>
      <LoadMore className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b, i) => (
          <Reveal key={b.slug} delay={(i % 3) * 0.1} y={60}>
            <BlogCard blog={b} />
          </Reveal>
        ))}
      </LoadMore>
    </section>
  );
}
