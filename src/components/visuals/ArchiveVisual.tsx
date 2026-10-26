import type { ArchiveItem } from "../../data/site";

export function ArchiveVisual({
  item,
  active,
  priority,
  total = 16,
}: {
  item: ArchiveItem;
  active: boolean;
  priority: boolean;
  total?: number;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-navy">
      <img
        src={item.src}
        srcSet={item.srcSet}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 860px"
        width={item.width}
        height={item.height}
        alt={item.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`h-full w-full object-cover transition-[transform,filter] duration-700 ease-out ${
          active ? "scale-[1.025] brightness-100" : "brightness-90"
        }`}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/65 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-7 sm:right-7 sm:top-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
          VV / Glimpses
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/65">
          Frame {item.index}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6 sm:bottom-7 sm:left-7 sm:right-7">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/65">
            Venture Craft 2025
          </span>
          <p className="mt-1 font-display text-[clamp(1.7rem,4vw,3.2rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-ivory">
            Venture Verse
          </p>
        </div>
        <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ivory/65 sm:block">
          {item.index} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
