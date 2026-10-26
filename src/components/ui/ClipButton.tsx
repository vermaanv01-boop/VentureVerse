import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../../lib/scroll";

type ClipButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
  showArrow?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
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
}: ClipButtonProps) {
  const classes = `clip-button group inline-flex h-12 items-center justify-center gap-3 px-7 font-mono text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
    variant === "solid"
      ? "bg-copper text-ink hover:bg-cream"
      : "bg-cream/[0.06] text-cream hover:bg-cream/[0.12] hover:text-copper-light"
  } ${className}`;

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
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
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
