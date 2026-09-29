import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt={site.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-20 text-center sm:pt-28">
        <span className="fade-up mb-5 inline-flex items-center gap-2 rounded-full gold-border bg-ink/40 px-4 py-1.5 text-xs font-semibold text-gold-light">
          <ShieldCheck size={14} className="text-gold" />
          {site.warranty}
        </span>

        <h1 className="fade-up max-w-3xl text-3xl font-extrabold leading-[1.4] sm:text-4xl md:text-5xl">
          <span className="gold-text">{site.name}</span>
          <br />
          <span className="text-[#f2ede1]">{site.tagline}</span>
        </h1>

        <p className="fade-up mt-6 max-w-xl text-sm leading-8 text-[#d8d0bb]/80 sm:text-base">
          {site.description} ما فقط نصب نمی‌کنیم؛ آرامش و امنیت را برای شما به
          ارمغان می‌آوریم.
        </p>

        <div className="fade-up mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm"
          >
            <Phone size={18} />
            تماس فوری
            <span dir="ltr" className="font-extrabold">{site.phone}</span>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            className="flex items-center gap-2 rounded-full btn-outline px-7 py-3 text-sm"
          >
            <MessageCircle size={18} />
            ثبت سفارش در واتساپ
          </a>
        </div>

        <div className="fade-up mt-6">
          <Link href="/products" className="text-xs text-gold-light/70 underline underline-offset-4 hover:text-gold">
            مشاهده محصولات و خدمات
          </Link>
        </div>
      </div>
    </section>
  );
}
