"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold gold-text text-lg font-extrabold">
            ت‌ص
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold gold-text">
              {site.shortName}
            </span>
            <span className="text-[11px] text-gold-light/60">
              کرکره برقی و درب اتوماتیک
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#e9e2cf]/85 transition hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full btn-gold px-4 py-2 text-sm"
          >
            <Phone size={16} />
            <span dir="ltr">{site.phone}</span>
          </a>
        </div>

        <button
          className="text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="منو"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/15 bg-ink/95 px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#e9e2cf]/85 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 flex w-fit items-center gap-2 rounded-full btn-gold px-4 py-2 text-sm"
            >
              <Phone size={16} />
              <span dir="ltr">{site.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
