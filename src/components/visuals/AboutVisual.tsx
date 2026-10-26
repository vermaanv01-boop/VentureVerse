export function AboutVisual() {
  return (
    <figure className="relative">
      <div className="clip-corner relative aspect-[16/10] overflow-hidden border border-navy/20 bg-navy shadow-panel">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(244,239,228,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,239,228,0.055) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <g
            className="about-orbit"
            style={{ transformOrigin: "540px 250px" }}
            stroke="#B59A65"
          >
            <circle cx="540" cy="250" r="148" strokeOpacity="0.45" />
            <circle cx="540" cy="250" r="198" strokeOpacity="0.2" />
            <circle cx="540" cy="250" r="96" strokeOpacity="0.3" />
            <path
              d="M392 250h296M540 102v296"
              strokeOpacity="0.18"
              strokeDasharray="3 7"
            />
            <circle cx="688" cy="250" r="4" fill="#F4EFE4" stroke="none" />
            <circle cx="540" cy="102" r="3" fill="#F4EFE4" stroke="none" />
          </g>
          <path
            d="M76 384 258 116l82 117 58-81 112 156"
            stroke="#F4EFE4"
            strokeOpacity="0.24"
            strokeWidth="1.2"
          />
          <path
            d="M76 410h356"
            stroke="#B59A65"
            strokeOpacity="0.4"
            strokeDasharray="2 8"
          />
          <g fill="#F4EFE4" opacity="0.5">
            <circle cx="258" cy="116" r="4" />
            <circle cx="398" cy="308" r="3" />
          </g>
        </svg>

        <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
          <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ivory/65">
            CSBS & CSE / 01
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
          <div className="font-display text-[clamp(2rem,5vw,3.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-ivory">
            Technology
            <br />
            meets enterprise<span className="text-gold">.</span>
          </div>
        </div>

        <div className="absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.18em] text-ivory/65 sm:right-8 sm:top-8">
          Venture Verse / 2026
        </div>

        <div
          className="about-scan pointer-events-none absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-navy/70">
        <span>Department of CSBS &amp; CSE</span>
        <span>Oriental Group of Institutes</span>
      </figcaption>
    </figure>
  );
}
