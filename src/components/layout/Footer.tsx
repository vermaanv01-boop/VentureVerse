import { ArrowUp, ArrowUpRight } from "lucide-react";
import {
  ADDRESS_LINES,
  CONTACT_EMAILS,
  FOOTER_LINKS,
  REGISTRATION_URL,
  SITE,
  SOCIAL_LINKS,
} from "../../data/site";
import { scrollToSection } from "../../lib/scroll";
import { BrandMark } from "../ui/BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-ivory/10 bg-charcoal">
      <div className="container-page pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Institution Info */}
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="mt-7 max-w-sm font-display text-2xl font-medium leading-[1.1] tracking-[-0.03em] text-ivory/90 sm:text-3xl">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/65">
              {SITE.description}
            </p>

            <div className="mt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">
                Host Campus
              </p>
              <address className="mt-2 font-body text-xs leading-relaxed text-ivory/60 not-italic max-w-xs">
                {ADDRESS_LINES.join(" ")}
              </address>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
              Quick Links
            </p>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline font-body text-sm text-ivory/65 transition-colors hover:text-gold"
                    onClick={(event) => {
                      if (link.href.startsWith("#")) {
                        event.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-gold hover:text-ivory transition-colors mt-2"
                >
                  <span>Register for 2026</span>
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                Follow Us
              </p>
              <ul className="mt-3 space-y-2">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-xs text-ivory/65 hover:text-gold transition-colors"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Official Inquiries & Details */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
              Festival Details
            </p>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Edition &amp; Schedule
                </dt>
                <dd className="mt-1 font-body text-sm text-ivory/80">
                  {SITE.eventDateLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Venue
                </dt>
                <dd className="mt-1 font-body text-sm text-ivory/80">
                  {SITE.locationLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                  Official Enquiries
                </dt>
                <dd className="mt-1.5 space-y-1 font-body text-xs text-ivory/80">
                  {CONTACT_EMAILS.map((email) => (
                    <div key={email.address}>
                      <a
                        href={`mailto:${email.address}`}
                        className="hover:text-gold transition-colors"
                      >
                        {email.address}
                      </a>
                    </div>
                  ))}
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

        {/* Copyright notice */}
        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/60">
            © {year} Department of CSBS &amp; CSE, Oriental Group of Institutes,
            Bhopal · All Rights Reserved
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold/80">
            Where Technology, Innovation, and Corporate Vision Converge.
          </p>
        </div>
      </div>

      <div className="container-page relative overflow-hidden">
        <p
          className="pointer-events-none translate-y-[17%] select-none whitespace-nowrap font-display text-[clamp(4.5rem,17.5vw,17rem)] font-semibold uppercase leading-[0.72] tracking-[-0.07em] text-gold/[0.08]"
          aria-hidden="true"
        >
          Venture Verse
        </p>
      </div>
    </footer>
  );
}
