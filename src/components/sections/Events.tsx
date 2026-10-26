import { FLAGSHIP_EVENTS } from "../../data/site";
import { ClipButton } from "../ui/ClipButton";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Events() {
  return (
    <section
      id="events"
      className="section-dark relative z-10 scroll-mt-20 overflow-hidden bg-navy"
    >
      <div className="container-page section-pad">
        <div className="grid gap-8 border-t border-ivory/15 pt-10 lg:grid-cols-12 lg:items-end lg:pt-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              02 / Core competitions
            </p>
            <SectionTitle
              text="The 4 flagship events"
              className="max-w-[10ch] text-[clamp(2.9rem,7vw,6.4rem)]"
            />
          </div>
          <p className="body-copy max-w-md text-sm lg:col-span-4 lg:col-start-9 lg:pb-2 lg:text-right">
            Four electrifying arenas. One mission: to discover, develop, and
            celebrate the leaders of tomorrow.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FLAGSHIP_EVENTS.map((event, index) => (
            <li key={event.name} className="h-full">
              <Reveal delay={index * 0.07} className="h-full">
                <article className="clip-corner group relative flex h-full flex-col overflow-hidden border border-ivory/15 bg-charcoal/80 transition-colors duration-500 hover:border-gold/60">
                  <div className="flex items-center justify-between border-b border-ivory/15 px-5 py-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                      Event {event.index}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60">
                      {event.format}
                    </span>
                  </div>

                  <div className="flex items-center gap-5 px-5 pb-5 pt-6">
                    <span className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden border border-gold/30 bg-navy">
                      <img
                        src={event.mascot}
                        alt={event.mascotAlt}
                        width={360}
                        height={360}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                          event.name === "UNIFEST" ? "object-contain p-2" : "object-cover"
                        }`}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[clamp(1.75rem,3.4vw,2.55rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-ivory">
                        {event.name}
                      </h3>
                      <p className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.16em] text-gold/90">
                        {event.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5">
                    <p className="font-body text-sm leading-relaxed text-ivory/70">
                      {event.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <ClipButton
                        href={event.registerUrl}
                        variant="ghost"
                        showArrow
                        className="!h-10 w-full justify-center !px-5"
                      >
                        Register now
                      </ClipButton>
                    </div>
                  </div>

                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-5 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/60">
            Registration is open for all four arenas
          </p>
          <ClipButton
            href={FLAGSHIP_EVENTS[0].registerUrl}
            variant="solid"
            className="!h-10 !px-5"
          >
            Register for Venture Verse
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
