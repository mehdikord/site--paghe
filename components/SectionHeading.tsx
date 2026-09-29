export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full gold-border px-4 py-1 text-xs font-semibold tracking-wide text-gold-light">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-extrabold leading-tight text-[#f5f1e4] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-[#cfc6ae]/75 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
