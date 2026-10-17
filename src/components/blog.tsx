import Link from "next/link";
import type { Blog } from "@/lib/cms";

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function BlogMeta({ blog }: { blog: Blog }) {
  return (
    <p className="flex items-center gap-2.5 text-sm">
      {formatDate(blog.date)} <span className="text-base">•</span> {blog.category}
    </p>
  );
}

const zoom = "transition-transform duration-700 ease-out-expo group-hover:scale-105";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group flex h-full flex-col gap-5 rounded-[20px] bg-card p-5">
      <div className="h-[220px] overflow-hidden rounded-[10px] md:h-[266px]">
        <img src={blog.image} alt="" className={`size-full object-cover ${zoom}`} />
      </div>
      <div className="flex flex-col gap-4">
        <BlogMeta blog={blog} />
        <h3 className="t-22">{blog.title}</h3>
      </div>
    </Link>
  );
}

export function BlogFeature({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group flex flex-col gap-5 rounded-[20px] bg-card p-5">
      <div className="h-[260px] overflow-hidden rounded-[10px] md:h-[385px]">
        <img src={blog.image} alt="" className={`size-full object-cover ${zoom}`} />
      </div>
      <div className="flex flex-col gap-4">
        <BlogMeta blog={blog} />
        <h3 className="t-22">{blog.title}</h3>
      </div>
    </Link>
  );
}

export function BlogRow({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group flex items-center gap-5">
      <div className="h-[120px] w-[110px] shrink-0 overflow-hidden rounded-[10px] md:h-[164px] md:w-[203px]">
        <img src={blog.image} alt="" className={`size-full object-cover ${zoom}`} />
      </div>
      <div className="flex flex-col gap-4">
        <BlogMeta blog={blog} />
        <h3 className="t-22 max-w-[407px]">{blog.title}</h3>
      </div>
    </Link>
  );
}
