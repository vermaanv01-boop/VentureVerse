import type { Speaker } from "../../data/site";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="clip-corner group relative mx-2 h-[390px] w-[286px] overflow-hidden border border-ivory/15 bg-charcoal transition-colors duration-500 hover:border-gold/60 sm:mx-3 sm:h-[460px] sm:w-[340px]">
      <img
        src={speaker.image}
        alt={speaker.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-navy/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
            Speaker {speaker.index}
          </span>
          <span className="font-display text-4xl font-medium leading-none tracking-[-0.05em] text-ivory/30 transition-colors duration-500 group-hover:text-gold/70 sm:text-5xl">
            {speaker.index}
          </span>
        </div>

        <div className="relative">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/90">
            Past speaker &amp; guest
          </span>
          <h3 className="mt-2 max-w-[10ch] font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-ivory">
            {speaker.name}
          </h3>
          <p className="mt-4 max-w-[15rem] font-body text-xs leading-relaxed text-ivory/70 sm:mt-5 sm:text-sm">
            {speaker.role}
          </p>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
