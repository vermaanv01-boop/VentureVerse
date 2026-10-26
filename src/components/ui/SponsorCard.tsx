import type { Sponsor } from "../../data/site";

export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <article className="group relative mx-2 w-[286px] shrink-0 border border-navy/15 bg-ivory transition-colors duration-500 hover:border-gold sm:mx-3 sm:w-[340px]">
      <div className="flex items-center justify-between border-b border-navy/15 bg-navy px-4 py-2.5">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-ivory/70">
          VV / Partner
        </span>
        <span
          className="h-1.5 w-1.5 bg-gold transition-colors duration-500 group-hover:bg-ivory"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex h-[170px] items-center justify-center bg-[#f7f7f7] px-7 sm:h-[208px] sm:px-9">
        <img
          src={sponsor.src}
          width={sponsor.width}
          height={sponsor.height}
          alt={`${sponsor.name} sponsor logo`}
          loading="eager"
          decoding="async"
          draggable={false}
          className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
