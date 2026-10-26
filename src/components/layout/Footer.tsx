import { ArrowUp } from "lucide-react";
import { FOOTER_LINKS, SITE } from "../../data/site";
import { scrollToSection } from "../../lib/scroll";
import { BrandMark } from "../ui/BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-ivory/10 bg-charcoal">
      <div className="container-page pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="mt-7 max-w-xs font-display text-2xl font-medium leading-[1.05] tracking-[-0.03em] text-ivory/90 sm:text-3xl">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/65">
              {SITE.description}
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline font-body text-sm text-ivory/65 transition-colors hover:text-gold"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
              Details
            </p>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Dates
                </dt>
                <dd className="mt-1 font-body text-sm text-ivory/70">
                  {SITE.eventDateLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Venue
                </dt>
                <dd className="mt-1 font-body text-sm text-ivory/70">
                  {SITE.locationLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Contact
                </dt>
                <dd className="mt-1 font-body text-sm text-ivory/70">
                  Channels being set up
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="clip-tag group mt-8 inline-flex items-center gap-3 border border-ivory/15 bg-navy/60 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ivory/65 transition-colors hover:border-gold/60 hover:text-gold"
            >
              Back to top
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/60">
            © {year} {SITE.name}
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/60">
            Built for the builders.
          </p>
        </div>
      </div>

      <div className="container-page relative">
        <p
          className="pointer-events-none translate-y-[17%] whitespace-nowrap font-display text-[clamp(4.5rem,17.5vw,17rem)] font-semibold uppercase leading-[0.72] tracking-[-0.07em] text-gold/[0.08]"
          aria-hidden="true"
        >
          Venture Verse
        </p>
      </div>
    </footer>
  );
}
