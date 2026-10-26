type SpeakerSlot = {
  index: string;
  role: string;
};

export function SpeakerCard({ slot }: { slot: SpeakerSlot }) {
  return (
    <article className="clip-corner group relative mx-2 h-[390px] w-[280px] overflow-hidden border border-cream/10 bg-[#1b1917] transition-colors duration-500 hover:border-copper/45 sm:mx-3 sm:h-[460px] sm:w-[340px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243,238,231,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,238,231,0.03) 1px, transparent 1px)",
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
          stroke="#B66A45"
          strokeOpacity="0.34"
          strokeWidth="1.2"
        />
        <path
          d="M92 434V236a78 78 0 0 1 156 0v198"
          stroke="#F3EEE7"
          strokeOpacity="0.11"
        />
        <path
          d="M50 434h240M170 124v310"
          stroke="#F3EEE7"
          strokeOpacity="0.08"
        />
        <circle cx="170" cy="236" r="42" fill="#B66A45" fillOpacity="0.09" />
        <circle cx="170" cy="236" r="3" fill="#D8A07A" />
        <path
          d="M170 194v-56M170 334v56M128 236h-52M212 236h52"
          stroke="#D8A07A"
          strokeOpacity="0.35"
          strokeDasharray="2 7"
        />
        <text
          x="28"
          y="446"
          fill="#F3EEE7"
          fillOpacity="0.2"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="8"
          letterSpacing="3"
        >
          PORTRAIT / PENDING
        </text>
      </svg>

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper-light">
            Speaker {slot.index}
          </span>
          <span className="font-display text-4xl font-medium leading-none tracking-[-0.05em] text-cream/12 transition-colors duration-500 group-hover:text-copper/40 sm:text-5xl">
            {slot.index}
          </span>
        </div>

        <div className="relative">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/35">
            {slot.role}
          </span>
          <h3 className="mt-2 max-w-[8ch] font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-cream">
            Name to be announced
          </h3>
          <p className="mt-4 max-w-[15rem] font-body text-xs leading-relaxed text-cream/45 transition-colors duration-500 sm:mt-5 sm:text-sm sm:text-cream/0 sm:group-hover:text-cream/45">
            Profile, practice, and session details will be published with the
            speaker line-up.
          </p>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}
