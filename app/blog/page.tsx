import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "وبلاگ | کرکره برقی ترکمن صحرا",
  description: "مقالات آموزشی درباره کرکره برقی، جک پارکینگی و درب‌های اتوماتیک",
};

export default function BlogPage() {
  return (
    <div>
      <section className="border-b border-gold/10 pattern-dots py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="mb-4 inline-block rounded-full gold-border px-4 py-1 text-xs font-semibold text-gold-light">
            وبلاگ ترکمن صحرا
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            مقالات و <span className="gold-text">راهنمای تخصصی</span>
          </h1>
          <p className="mt-5 text-sm leading-8 text-[#cfc6ae]/75 sm:text-base">
            نکات نگهداری، راهنمای خرید و اطلاعات کاربردی درباره کرکره برقی و
            درب‌های اتوماتیک را در این بخش بخوانید.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
