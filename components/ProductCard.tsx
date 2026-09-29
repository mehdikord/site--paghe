import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group card-glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-gold/50">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-extrabold text-gold-light">
          {product.title}
        </h3>
        <p className="mb-4 text-sm leading-7 text-[#cfc6ae]/75">
          {product.summary}
        </p>
        <ul className="mb-5 space-y-2">
          {product.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs text-[#e5ddc4]/85">
              <Check size={14} className="mt-0.5 shrink-0 text-gold" />
              {p}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
        >
          درخواست مشاوره رایگان
          <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}
