"use client";

import { useState } from "react";

/** Shows `step` children at a time with a "Load More" button. */
export default function LoadMore({ children, step = 6, className }: { children: React.ReactNode[]; step?: number; className?: string }) {
  const [count, setCount] = useState(step);
  return (
    <>
      <div className={className}>{children.slice(0, count)}</div>
      {count < children.length && (
        <button
          type="button"
          onClick={() => setCount(count + step)}
          className="mx-auto mt-[42px] block cursor-pointer rounded-[50px] bg-accent px-5 py-2.5 text-sm text-white transition-[filter] hover:brightness-95"
        >
          Load More
        </button>
      )}
    </>
  );
}
