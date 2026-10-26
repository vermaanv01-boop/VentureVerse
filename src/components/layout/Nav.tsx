import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "../../data/site";
import { scrollToSection } from "../../lib/scroll";
import { BrandMark } from "../ui/BrandMark";
import { ClipButton } from "../ui/ClipButton";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled
            ? "border-ivory/15 bg-navy/95 backdrop-blur-xl"
            : "border-transparent bg-navy/30 backdrop-blur-sm"
        }`}
      >
        <nav
          className="container-page flex h-[68px] items-center justify-between gap-6"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="shrink-0"
            aria-label="Venture Verse home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#home");
            }}
          >
            <BrandMark />
          </a>

          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ivory/70 transition-colors duration-300 hover:text-gold"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ClipButton
              href="#contact"
              className="!hidden !h-10 !px-5 sm:!inline-flex"
            >
              Get involved
            </ClipButton>
            <button
              type="button"
              className="clip-corner flex h-10 w-10 items-center justify-center bg-gold text-navy transition-colors hover:bg-ivory lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
