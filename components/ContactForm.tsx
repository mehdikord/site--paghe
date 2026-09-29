"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `سلام، من ${name || "..."} هستم.%0aشماره تماس: ${
      phone || "..."
    }%0aپیام: ${message || "درخواست مشاوره رایگان"}`;
    window.open(`${site.whatsappHref}?text=${text}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass space-y-5 rounded-2xl p-7">
      <div>
        <label className="mb-2 block text-xs font-bold text-gold-light">
          نام و نام خانوادگی
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-sm text-[#f2ede1] outline-none transition focus:border-gold/60"
          placeholder="مثلاً: علی رضایی"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-bold text-gold-light">
          شماره تماس
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir="ltr"
          className="w-full rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-sm text-[#f2ede1] outline-none transition focus:border-gold/60"
          placeholder="09xxxxxxxxx"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-bold text-gold-light">
          توضیحات درخواست
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-gold/20 bg-black/30 px-4 py-3 text-sm text-[#f2ede1] outline-none transition focus:border-gold/60"
          placeholder="مثلاً: نیاز به نصب کرکره برقی برای پارکینگ دارم"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full btn-gold px-6 py-3 text-sm"
      >
        ارسال درخواست در واتساپ
        <Send size={16} />
      </button>
      <p className="text-center text-[11px] text-[#cfc6ae]/50">
        با ارسال فرم، به واتساپ منتقل می‌شوید و پیام شما آماده ارسال خواهد بود.
      </p>
    </form>
  );
}
