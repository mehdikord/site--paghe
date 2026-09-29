import {
  BadgePercent,
  Zap,
  ShieldCheck,
  Headphones,
  Award,
  BadgeCheck,
  LucideIcon,
} from "lucide-react";
import { Feature } from "@/lib/data";

const map: Record<Feature["icon"], LucideIcon> = {
  price: BadgePercent,
  fast: Zap,
  shield: ShieldCheck,
  support: Headphones,
  quality: BadgeCheck,
  guarantee: Award,
};

export default function Icon({ name, size = 22 }: { name: Feature["icon"]; size?: number }) {
  const Cmp = map[name];
  return <Cmp size={size} />;
}
