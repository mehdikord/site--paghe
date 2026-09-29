import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { posts, site } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${site.shortName}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gold-light/70 hover:text-gold"
      >
        <ArrowRight size={16} />
        بازگشت به وبلاگ
      </Link>

      <div className="mb-6 flex items-center gap-4 text-xs text-gold-light/60">
        <span className="flex items-center gap-1">
          <Calendar size={13} /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={13} /> {post.readTime}
        </span>
      </div>

      <h1 className="mb-8 text-2xl font-extrabold leading-tight sm:text-3xl">
        {post.title}
      </h1>

      <article className="space-y-5 border-t border-gold/10 pt-8 text-sm leading-8 text-[#d8d0bb]/90 sm:text-base sm:leading-9">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      <div className="card-glass mt-12 flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
        <p className="text-sm text-[#e5ddc4]/85">
          برای مشاوره رایگان یا دریافت خدمات نصب و تعمیر با ما در تماس باشید
        </p>
        <a
          href={site.phoneHref}
          className="flex items-center gap-2 rounded-full btn-gold px-6 py-2.5 text-sm"
        >
          <Phone size={16} />
          <span dir="ltr">{site.phone}</span>
        </a>
      </div>

      {others.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-5 text-lg font-extrabold text-gold-light">
            مقالات مرتبط
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}`}
                className="card-glass rounded-xl p-5 text-sm font-bold text-[#f2ede1] transition hover:border-gold/50 hover:text-gold"
              >
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
