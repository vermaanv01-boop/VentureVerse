git commit -m "added photo "type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <picture className="shrink-0">
        <source srcSet="/images/brand/logo-mark.webp" type="image/webp" />
        <img
          src="/images/brand/logo-mark.png"
          alt=""
          width={392}
          height={334}
          loading="eager"
          decoding="async"
          className="h-9 w-auto max-w-[52px] object-contain drop-shadow-[0_0_14px_rgba(182,106,69,0.14)]"
        />
      </picture>
      {showWordmark ? (
        <span className="font-display text-[15px] font-semibold uppercase tracking-[-0.02em] text-cream">
          Venture <span className="text-copper-light">Verse</span>
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
      className={`object-contain ${className}`}
    />
  );
}
