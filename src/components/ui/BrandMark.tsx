import type { SVGProps } from "react";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({ className = "", showWordmark = true }: BrandMarkProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="0.5" y="0.5" width="63" height="63" rx="6" fill="#111110" stroke="rgba(243,238,231,0.16)" />
        <path d="M11 15 26 49h10L21 15H11Z" fill="#B66A45" />
        <path d="M53 15 38 49H28l15-34h10Z" fill="#F3EEE7" />
        <circle cx="32" cy="11" r="2.75" fill="#D8A07A" />
      </svg>
      {showWordmark ? (
        <span className="font-display text-[15px] font-semibold uppercase tracking-[-0.02em] text-cream">
          Venture <span className="text-copper-light">Verse</span>
        </span>
      ) : null}
    </span>
  );
}

export function Monogram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M11 15 26 49h10L21 15H11Z" fill="#B66A45" />
      <path d="M53 15 38 49H28l15-34h10Z" fill="#F3EEE7" />
      <circle cx="32" cy="11" r="2.75" fill="#D8A07A" />
    </svg>
  );
}
