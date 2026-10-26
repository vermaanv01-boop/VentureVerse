type ArchiveItem = {
  index: string;
  title: string;
  code: string;
};

export function ArchiveVisual({
  item,
  variant,
}: {
  item: ArchiveItem;
  variant: number;
}) {
  const pattern = variant % 6;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1a1816]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243,238,231,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,238,231,0.04) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#B66A45">
          {pattern === 0 ? (
            <>
              <circle cx="556" cy="226" r="148" strokeOpacity="0.35" />
              <circle cx="556" cy="226" r="92" strokeOpacity="0.2" />
              <circle cx="556" cy="226" r="36" strokeOpacity="0.16" />
              <path d="M378 226h356M556 48v356" strokeOpacity="0.14" strokeDasharray="3 8" />
              <circle cx="556" cy="226" r="5" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
          {pattern === 1 ? (
            <>
              <path d="M438 346V252h48v94M504 346V206h48v140M570 346V270h48v76M636 346V164h48v182" strokeOpacity="0.28" strokeWidth="1.2" />
              <path d="M438 346h246" strokeOpacity="0.18" />
              <path d="M446 214 662 136" strokeOpacity="0.35" strokeDasharray="2 8" />
              <circle cx="662" cy="136" r="4" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
          {pattern === 2 ? (
            <>
              <g fill="#B66A45" fillOpacity="0.4" stroke="none">
                {[0, 1, 2, 3, 4].map((row) =>
                  [0, 1, 2, 3, 4, 5].map((column) => (
                    <circle
                      key={`${row}-${column}`}
                      cx={452 + column * 38}
                      cy={130 + row * 38}
                      r="2.2"
                    />
                  )),
                )}
              </g>
              <path d="M452 282 604 130l114 190" strokeOpacity="0.32" />
              <circle cx="604" cy="130" r="5" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
          {pattern === 3 ? (
            <>
              <path d="M462 340a136 136 0 0 1 268 0" strokeOpacity="0.34" strokeWidth="1.2" />
              <path d="M494 340a104 104 0 0 1 204 0" strokeOpacity="0.18" />
              <path d="M596 204v-58l-24 24M596 146l24 24" strokeOpacity="0.4" />
              <path d="M420 340h350" strokeOpacity="0.15" strokeDasharray="2 8" />
              <circle cx="596" cy="340" r="4" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
          {pattern === 4 ? (
            <>
              <path d="M378 350 680 48M424 350 726 48M470 350 772 48M516 350 818 48" strokeOpacity="0.18" />
              <rect x="514" y="152" width="162" height="162" strokeOpacity="0.32" transform="rotate(-12 595 233)" />
              <rect x="552" y="190" width="86" height="86" strokeOpacity="0.18" transform="rotate(-12 595 233)" />
              <circle cx="595" cy="233" r="3.5" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
          {pattern === 5 ? (
            <>
              <path d="M596 226c0-50-40-90-90-90s-90 40-90 90 40 90 90 90 90-40 90-90Z" strokeOpacity="0.3" />
              <path d="M596 226c0-24-19-43-43-43s-43 19-43 43 19 43 43 43" strokeOpacity="0.2" />
              <path d="M596 226h148M596 78v296" strokeOpacity="0.14" strokeDasharray="3 8" />
              <path d="M444 226h-38" strokeOpacity="0.25" />
              <circle cx="596" cy="226" r="4" fill="#D8A07A" stroke="none" />
            </>
          ) : null}
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-7 sm:right-7 sm:top-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper-light">
          {item.code}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cream/30">
          Visual placeholder
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/35">
          Fragment / {item.index}
        </span>
        <p className="mt-1 font-display text-[clamp(2.5rem,6vw,5.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em] text-cream">
          {item.title}
        </p>
      </div>

      <span className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/25 sm:bottom-7 sm:right-7">
        VV
      </span>
    </div>
  );
}
