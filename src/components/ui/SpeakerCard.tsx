type SpeakerSlot = {
  index: string;
  role: string;
};

export function SpeakerCard({ slot }: { slot: SpeakerSlot }) {
  return (
    <article className="clip-corner group relative mx-2 h-[390px] w-[280px] overflow-hidden border border-ivory/15 bg-charcoal transition-colors duration-500 hover:border-gold/60 sm:mx-3 sm:h-[460px] sm:w-[340px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(101,119,137,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(101,119,137,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 340 460"
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M66 434V228a104 104 0 0 1 208 0v206"
          stroke="#B59A65"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />
        <path
          d="M92 434V236a78 78 0 0 1 156 0v198"
          stroke="#F4EFE4"
          strokeOpacity="0.14"
        />
        <path
          d="M50 434h240M170 124v310"
          stroke="#F4EFE4"
          strokeOpacity="0.1"
        />
        <circle cx="170" cy="236" r="42" fill="#B59A65" fillOpacity="0.12" />
        <circle cx="170" cy="236" r="3" fill="#B59A65" />
        <path
          d="M170 194v-56M170 334v56M128 236h-52M212 236h52"
          stroke="#B59A65"
          strokeOpacity="0.48"
          strokeDasharray="2 7"
        />
        <text
          x="28"
          y="446"
          fill="#F4EFE4"
          fillOpacity="0.28"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="8"
          letterSpacing="3"
        >
          PORTRAIT / PENDING
        </text>
      </svg>

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
            Speaker {slot.index}
          </span>
          <span className="font-display text-4xl font-medium leading-none tracking-[-0.05em] text-ivory/15 transition-colors duration-500 group-hover:text-gold/50 sm:text-5xl">
            {slot.index}
          </span>
        </div>

        <div className="relative">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/45">
            {slot.role}
          </span>
          <h3 className="mt-2 max-w-[8ch] font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-ivory">
            Name to be announced
          </h3>
          <p className="mt-4 max-w-[15rem] font-body text-xs leading-relaxed text-ivory/50 transition-colors duration-500 sm:mt-5 sm:text-sm sm:text-ivory/0 sm:group-hover:text-ivory/50">
            Profile, practice, and session details will be published with the
            speaker line-up.
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
