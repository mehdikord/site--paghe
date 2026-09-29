import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { products, posts, checklist } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="چرا ترکمن صحرا؟"
          title="کیفیت اتفاقی نیست، تعهد ماست"
          description="از انتخاب تجهیزات تا نصب و خدمات پس از فروش، هر مرحله با دقت و تعهد به رضایت مشتری انجام می‌شود."
        />
        <FeatureGrid />
      </section>

      <section className="border-t border-gold/10 bg-ink-soft py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="محصولات ما"
            title="محصولات و خدمات تخصصی"
            description="نصب، فروش و تعمیر تخصصی انواع درب‌های اتوماتیک با گارانتی و پشتیبانی کامل"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="تعهد ما به شما"
              title="ما فقط نصب نمی‌کنیم، آرامش شما را به ارمغان می‌آوریم"
              description="تیم ترکمن صحرا با سال‌ها تجربه در نصب و تعمیر انواع درب‌های اتوماتیک، همراه مطمئن شما در استان گلستان است."
            />
            <ul className="space-y-4">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-[#e5ddc4]/90">
                  <CheckCircle2 size={20} className="shrink-0 text-gold" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm"
            >
              مشاوره رایگان بگیرید
            </Link>
          </div>
          <div className="card-glass rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-extrabold gold-text">۲ سال</div>
                <div className="mt-2 text-xs text-[#cfc6ae]/70">گارانتی قطعات</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold gold-text">۲۴/۷</div>
                <div className="mt-2 text-xs text-[#cfc6ae]/70">پشتیبانی</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold gold-text">+۴</div>
                <div className="mt-2 text-xs text-[#cfc6ae]/70">دسته محصول تخصصی</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold gold-text">۱۰۰٪</div>
                <div className="mt-2 text-xs text-[#cfc6ae]/70">مشاوره رایگان</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="وبلاگ"
          title="آخرین مقالات آموزشی"
          description="راهنما، نکات نگهداری و اطلاعات کاربردی درباره درب‌های اتوماتیک"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full btn-outline px-6 py-2.5 text-sm"
          >
            مشاهده همه مقالات
          </Link>
        </div>
      </section>
    </div>
  );
}
