type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/60 bg-ivory">
        <picture className="shrink-0">
          <source srcSet="/images/brand/logo-mark.webp" type="image/webp" />
          <img
            src="/images/brand/logo-mark.png"
            alt=""
            width={392}
            height={334}
            loading="eager"
            decoding="async"
            className="h-6 w-auto max-w-[32px] object-contain"
          />
        </picture>
      </span>
      {showWordmark ? (
        <span className="font-display text-[15px] font-semibold uppercase tracking-[-0.02em] text-ivory">
          Venture <span className="text-gold">Verse</span>
        </span>
      ) : null}
    </span>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/brand/logo-mark.webp"
      alt=""
      aria-hidden="true"
      className={`object-contain brightness-0 invert ${className}`}
    />
  );
}
