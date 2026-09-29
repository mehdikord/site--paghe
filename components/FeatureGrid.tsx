import { features } from "@/lib/data";
import Icon from "@/components/Icon";

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {features.map((f) => (
        <div
          key={f.title}
          className="card-glass group rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:border-gold/50"
        >
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-ink">
            <Icon name={f.icon} />
          </div>
          <div className="text-sm font-bold text-[#f2ede1]">{f.title}</div>
          <div className="mt-1 text-xs leading-5 text-[#cfc6ae]/65">
            {f.description}
          </div>
        </div>
      ))}
    </div>
  );
}
