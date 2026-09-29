import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      aria-label="تماس در واتساپ"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
