import { PartnerMark } from "../visuals/PartnerMark";

type PartnerSlot = {
  index: string;
  label: string;
  note: string;
};

export function PartnerCard({
  slot,
  variant,
}: {
  slot: PartnerSlot;
  variant: number;
}) {
  return (
    <article className="clip-corner group relative mx-2 flex h-[210px] w-[300px] flex-col justify-between overflow-hidden border border-cream/10 bg-surface/90 p-6 transition-colors duration-500 hover:border-copper/45 sm:mx-3 sm:h-[240px] sm:w-[380px] sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243,238,231,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,238,231,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/35">
          {slot.index} / Partner
        </span>
        <span className="h-1.5 w-1.5 bg-copper/70 transition-colors duration-500 group-hover:bg-copper-light" />
      </div>

      <div className="relative flex flex-1 items-center">
        <PartnerMark variant={variant} />
      </div>

      <div className="relative flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-cream sm:text-2xl">
            {slot.label}
          </h3>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-cream/35">
            {slot.note}
          </p>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-copper-light/60">
          VV
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
