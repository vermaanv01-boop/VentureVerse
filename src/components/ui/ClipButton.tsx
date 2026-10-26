import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../../lib/scroll";

type ClipButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "light" | "invert";
  className?: string;
  showArrow?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
};

export function ClipButton({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  showArrow = true,
  ariaLabel,
  type = "button",
  target,
  rel,
}: ClipButtonProps) {
  const variants = {
    solid: "bg-gold text-navy hover:bg-ivory",
    ghost:
      "bg-ivory/[0.07] text-ivory hover:bg-ivory/[0.14] hover:text-gold",
    light: "bg-navy/[0.07] text-navy hover:bg-navy hover:text-ivory",
    invert: "bg-navy text-ivory hover:bg-gold hover:text-navy",
  };

  const classes = `clip-button group inline-flex h-12 items-center justify-center gap-3 px-7 font-mono text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target || (isExternal && !href.startsWith("mailto:") && !href.startsWith("tel:") ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        onClick={(event) => {
          if (href.startsWith("#")) {
            event.preventDefault();
            scrollToSection(href);
          }
          onClick?.();
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
