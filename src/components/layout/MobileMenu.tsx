import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../../data/site";
import { lockScroll, scrollToSection, unlockScroll } from "../../lib/scroll";
import { BrandMark, Monogram } from "../ui/BrandMark";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    triggerRef.current = document.activeElement as HTMLElement;
    lockScroll();

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      unlockScroll();
      triggerRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      id="mobile-navigation"
      className="menu-enter fixed inset-0 z-[70] bg-ink lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <div
        ref={panelRef}
        className="flex h-[100dvh] flex-col overflow-y-auto"
      >
        <div className="container-page flex h-[68px] shrink-0 items-center justify-between border-b border-cream/10">
          <BrandMark />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="clip-corner flex h-10 w-10 items-center justify-center bg-cream/5 text-cream transition-colors hover:bg-cream/10"
            aria-label="Close menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="container-page flex flex-1 flex-col justify-between py-10">
          <div>
            <p id="mobile-menu-title" className="eyebrow mb-8">
              <span className="eyebrow-line" aria-hidden="true" />
              Navigation
            </p>
            <ul className="border-t border-cream/10">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="border-b border-cream/10">
                  <a
                    href={link.href}
                    className="group flex items-center justify-between py-4"
                    onClick={(event) => {
                      event.preventDefault();
                      onClose();
                      window.setTimeout(() => scrollToSection(link.href), 40);
                    }}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-copper-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-semibold uppercase tracking-[-0.04em] text-cream">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-cream/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-light"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-14 overflow-hidden border-t border-cream/10 pt-8">
            <div className="relative z-10">
              <p className="font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                {SITE.tagline}
              </p>
              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream/50">
                {SITE.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-copper-light"
                onClick={(event) => {
                  event.preventDefault();
                  onClose();
                  window.setTimeout(() => scrollToSection("#contact"), 40);
                }}
              >
                Start a conversation
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <Monogram className="pointer-events-none absolute -bottom-12 -right-5 h-48 w-48 opacity-[0.055]" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
