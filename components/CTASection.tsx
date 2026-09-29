import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center">
        <h2 className="text-2xl font-extrabold text-[#f5f1e4] sm:text-3xl">
          آماده‌اید امنیت و آرامش منزل یا کسب‌وکار خود را{" "}
          <span className="gold-text">هوشمند‌تر</span> کنید؟
        </h2>
        <p className="max-w-xl text-sm leading-7 text-[#cfc6ae]/75">
          کافیست با ما تماس بگیرید تا کارشناسان {site.shortName} در کوتاه‌ترین
          زمان، مشاوره رایگان و بازدید محل را برای شما انجام دهند.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm">
            <Phone size={18} />
            <span dir="ltr">{site.phone}</span>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            className="flex items-center gap-2 rounded-full btn-outline px-7 py-3 text-sm"
          >
            <MessageCircle size={18} />
            پیام در واتساپ
          </a>
        </div>
      </div>
    </section>
  );
}
