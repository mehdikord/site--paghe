import Link from "next/link";
import { Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 text-lg font-extrabold gold-text">
            {site.name}
          </div>
          <p className="text-sm leading-7 text-[#cfc6ae]/75">
            {site.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-gold-light/70">
            <ShieldCheck size={16} className="text-gold" />
            {site.warranty}
          </div>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-gold-light">دسترسی سریع</div>
          <ul className="space-y-2 text-sm text-[#cfc6ae]/75">
            <li><Link className="hover:text-gold" href="/">خانه</Link></li>
            <li><Link className="hover:text-gold" href="/products">محصولات</Link></li>
            <li><Link className="hover:text-gold" href="/blog">وبلاگ</Link></li>
            <li><Link className="hover:text-gold" href="/contact">تماس با ما</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-gold-light">خدمات</div>
          <ul className="space-y-2 text-sm text-[#cfc6ae]/75">
            <li>نصب و فروش کرکره برقی</li>
            <li>نصب جک پارکینگی</li>
            <li>درب اکاردئونی</li>
            <li>تعمیر و سرویس دوره‌ای</li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-gold-light">راه‌های ارتباطی</div>
          <ul className="space-y-3 text-sm text-[#cfc6ae]/85">
            <li>
              <a className="flex items-center gap-2 hover:text-gold" href={site.phoneHref}>
                <Phone size={16} className="text-gold" />
                <span dir="ltr">{site.phone}</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-gold" href={site.whatsappHref} target="_blank">
                <MessageCircle size={16} className="text-gold" />
                واتساپ
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" />
              {site.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-5 text-center text-xs text-[#cfc6ae]/50">
        © {new Date().getFullYear()} {site.name} — تمامی حقوق محفوظ است. مدیریت: {site.owner}
      </div>
    </footer>
  );
}
