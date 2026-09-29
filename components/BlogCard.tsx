import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Post } from "@/lib/data";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card-glass flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/50"
    >
      <div className="mb-4 flex items-center gap-4 text-xs text-gold-light/60">
        <span className="flex items-center gap-1">
          <Calendar size={13} /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={13} /> {post.readTime}
        </span>
      </div>
      <h3 className="mb-3 text-base font-extrabold leading-8 text-[#f2ede1] transition group-hover:text-gold">
        {post.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-7 text-[#cfc6ae]/70">
        {post.excerpt}
      </p>
      <span className="flex items-center gap-2 text-sm font-bold text-gold transition group-hover:gap-3">
        ادامه مطلب
        <ArrowLeft size={16} />
      </span>
    </Link>
  );
}
