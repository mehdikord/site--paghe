import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "تماس با ما | کرکره برقی ترکمن صحرا",
  description: "راه‌های ارتباطی و ثبت درخواست مشاوره رایگان",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-gold/10 pattern-dots py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="mb-4 inline-block rounded-full gold-border px-4 py-1 text-xs font-semibold text-gold-light">
            تماس با ما
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            همین حالا با <span className="gold-text">کارشناسان ما</span> در
            ارتباط باشید
          </h1>
          <p className="mt-5 text-sm leading-8 text-[#cfc6ae]/75 sm:text-base">
            برای دریافت مشاوره رایگان، استعلام قیمت یا هماهنگی بازدید، فرم زیر
            را پر کنید یا مستقیم تماس بگیرید.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <a
              href={site.phoneHref}
              className="card-glass flex items-center gap-4 rounded-2xl p-6 transition hover:border-gold/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Phone size={20} />
              </span>
              <div>
                <div className="text-xs text-[#cfc6ae]/60">تماس تلفنی</div>
                <div dir="ltr" className="text-lg font-extrabold text-[#f2ede1]">
                  {site.phone}
                </div>
              </div>
            </a>

            <a
              href={site.whatsappHref}
              target="_blank"
              className="card-glass flex items-center gap-4 rounded-2xl p-6 transition hover:border-gold/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <MessageCircle size={20} />
              </span>
              <div>
                <div className="text-xs text-[#cfc6ae]/60">واتساپ</div>
                <div className="text-lg font-extrabold text-[#f2ede1]">
                  ارسال پیام مستقیم
                </div>
              </div>
            </a>

            <div className="card-glass flex items-center gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Clock size={20} />
              </span>
              <div>
                <div className="text-xs text-[#cfc6ae]/60">ساعات پاسخگویی</div>
                <div className="text-lg font-extrabold text-[#f2ede1]">
                  همه روزه، ۲۴ ساعته
                </div>
              </div>
            </div>

            <div className="card-glass flex items-center gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <MapPin size={20} />
              </span>
              <div>
                <div className="text-xs text-[#cfc6ae]/60">منطقه خدمات‌رسانی</div>
                <div className="text-lg font-extrabold text-[#f2ede1]">
                  {site.city} و شهرستان‌های اطراف
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
