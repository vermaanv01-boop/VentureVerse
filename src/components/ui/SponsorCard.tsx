import type { Sponsor } from "../../data/site";

export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <article className="group relative mx-2 w-[286px] shrink-0 sm:mx-3 sm:w-[340px]">
      <div className="flex items-center justify-between border border-cream/10 bg-surface/80 px-4 py-2.5">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-cream/40">
          VV / Partner
        </span>
        <span
          className="h-1.5 w-1.5 bg-copper/70 transition-colors duration-500 group-hover:bg-copper-light"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex h-[170px] items-center justify-center border border-t-0 border-cream/10 bg-[#f7f7f7] px-7 sm:h-[208px] sm:px-9">
        <img
          src={sponsor.src}
          width={sponsor.width}
          height={sponsor.height}
          alt={`${sponsor.name} sponsor logo`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
