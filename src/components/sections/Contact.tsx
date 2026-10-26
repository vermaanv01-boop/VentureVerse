import { Handshake, MessageSquare, Mic } from "lucide-react";
import { CONTACT_CARDS, SITE } from "../../data/site";
import { ClipButton } from "../ui/ClipButton";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const ICONS = {
  handshake: Handshake,
  mic: Mic,
  message: MessageSquare,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="section-dark relative z-10 scroll-mt-20 bg-navy"
    >
      <div className="container-page section-pad">
        <div className="grid gap-12 border-t border-ivory/15 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              06 / Contact
            </p>
            <SectionTitle
              text="Start something."
              className="max-w-[9ch] text-[clamp(3rem,7.5vw,6.6rem)]"
            />
            <p className="body-copy mt-6 max-w-xl text-pretty">
              We are building the club in the open. Partnership, speaking, and
              collaboration enquiries will open here first.
            </p>
          </div>

          <Reveal
            className="lg:col-span-4 lg:col-start-9 lg:pt-10"
            delay={0.1}
          >
            <div className="border border-ivory/15 bg-charcoal/70 p-6 sm:p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                Open invitation
              </p>
              <p className="mt-4 font-display text-2xl font-medium leading-[1.05] tracking-[-0.03em] text-ivory">
                Built for people who would rather make the first move.
              </p>

              <dl className="mt-7 border-t border-ivory/15">
                <div className="flex items-center justify-between gap-4 border-b border-ivory/15 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Dates
                  </dt>
                  <dd className="text-right font-body text-xs text-ivory/70">
                    {SITE.eventDateLabel}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-ivory/15 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Venue
                  </dt>
                  <dd className="text-right font-body text-xs text-ivory/70">
                    {SITE.locationLabel}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/65">
                    Contact
                  </dt>
                  <dd className="flex items-center gap-2 text-right font-body text-xs text-ivory/70">
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-gold"
                      aria-hidden="true"
                    />
                    Being set up
                  </dd>
                </div>
              </dl>

              <p className="mt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-ivory/60">
                No registration details have been published yet.
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-3">
          {CONTACT_CARDS.map((card, index) => {
            const Icon = ICONS[card.icon];

            return (
              <li key={card.title} className="h-full">
                <Reveal delay={index * 0.07} className="h-full">
                  <article className="group relative flex h-full flex-col border border-ivory/15 bg-charcoal/45 p-6 transition-colors duration-500 hover:border-gold/50 hover:bg-charcoal/75 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className="text-gold transition-colors duration-300 group-hover:text-ivory"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[9px] tracking-[0.18em] text-ivory/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-9 font-display text-xl font-medium tracking-[-0.025em] text-ivory sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[26ch] font-body text-sm leading-relaxed text-ivory/60">
                      {card.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2.5 border-t border-ivory/15 pt-5 sm:mt-8">
                      <span
                        className="h-1.5 w-1.5 shrink-0 bg-gold"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ivory/60">
                        {card.note}
                      </span>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/60">
              In the meantime
            </p>
            <p className="mt-2 font-display text-xl font-medium tracking-[-0.02em] text-ivory/85">
              The programme is the best place to start.
            </p>
          </div>
          <ClipButton href="#events" className="self-start sm:self-auto">
            Explore events
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
