import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard, formatDate } from "@/components/blog";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/ui";
import { blogs } from "@/lib/cms";

export const generateStaticParams = () => blogs.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find((x) => x.slug === slug);
  return b ? { title: b.title, description: b.short } : {};
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();
  const recent = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="px-5 pt-10 pb-[100px] md:px-[30px] md:pt-[80px] lg:pb-[200px]">
        <Reveal onLoad className="mx-auto flex max-w-[800px] flex-col items-center gap-5 text-center">
          <p className="flex items-center gap-5">
            {formatDate(blog.date)}
            <span className="rounded-[20px] bg-accent px-2.5 py-0.5 text-white">{blog.category}</span>
          </p>
          <h1 className="t-70">{blog.title}</h1>
          <p>{blog.short}</p>
        </Reveal>
        <Reveal onLoad delay={0.2} className="mt-[60px] h-[300px] overflow-hidden rounded-[20px] md:h-[500px] lg:h-[700px]">
          <img src={blog.image} alt="" className="size-full object-cover" />
        </Reveal>
        <div className="prose-cms mx-auto mt-[60px] max-w-[700px]" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      <section className="px-5 pb-[100px] md:px-[30px] lg:pb-[200px]">
        <Reveal>
          <SectionTitle tag="Read tips, insights, and stories." title="Recent blogs" className="mb-[60px] max-w-[700px]" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.1} y={60}>
              <BlogCard blog={b} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
