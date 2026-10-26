export function LineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path
          className="line-art-path"
          d="M64 74 210 444 356 74"
        />
        <path
          className="line-art-path"
          d="M106 116 210 364 314 116"
        />
        <ellipse
          className="line-art-path"
          cx="210"
          cy="190"
          rx="152"
          ry="64"
          transform="rotate(-28 210 190)"
        />
        <circle className="line-art-path" cx="210" cy="168" r="82" />
        <path className="line-art-path" d="M210 18v94M210 402v92" />
        <path className="line-art-path" d="M28 260h130M272 260h120" />
        <path className="line-art-path" d="M70 36 102 68M350 36 318 68" />
        <path className="line-art-path" d="M70 484 102 452M350 484 318 452" />
      </g>

      <g stroke="currentColor" strokeWidth="1" opacity="0.45">
        <path d="M210 92v-16M210 444v-18" />
        <path d="M92 190h18M310 190h18" />
        <path d="M118 28v8M302 28v8M118 484v8M302 484v8" />
      </g>

      <g fill="currentColor">
        <circle cx="210" cy="86" r="3.2" />
        <circle cx="210" cy="444" r="3.2" />
        <circle cx="106" cy="116" r="2.4" opacity="0.8" />
        <circle cx="314" cy="116" r="2.4" opacity="0.8" />
        <circle cx="132" cy="260" r="2" opacity="0.55" />
        <circle cx="312" cy="260" r="2" opacity="0.55" />
      </g>

      <g
        fill="currentColor"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="8"
        letterSpacing="2.8"
        opacity="0.6"
      >
        <text x="210" y="512" textAnchor="middle">
          IDEAS IN MOTION
        </text>
        <text x="16" y="208" transform="rotate(-90 16 208)">
          VENTURE VERSE
        </text>
      </g>
    </svg>
  );
}
