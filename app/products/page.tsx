import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "محصولات و خدمات | کرکره برقی ترکمن صحرا",
  description:
    "کرکره برقی، جک پارکینگی، درب اکاردئونی و ریموت کنترل با گارانتی و نصب تخصصی",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="border-b border-gold/10 pattern-dots py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="mb-4 inline-block rounded-full gold-border px-4 py-1 text-xs font-semibold text-gold-light">
            محصولات و خدمات
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            هر آنچه برای <span className="gold-text">امنیت و رفاه</span> نیاز
            دارید
          </h1>
          <p className="mt-5 text-sm leading-8 text-[#cfc6ae]/75 sm:text-base">
            از کرکره برقی و جک پارکینگی تا درب اکاردئونی و ریموت کنترل؛ تمام
            محصولات با گارانتی معتبر و پشتیبانی فنی ارائه می‌شوند.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
