import { FLAGSHIP_EVENTS, SITE } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { AboutVisual } from "../visuals/AboutVisual";

export function About() {
  return (
    <section
      id="about"
      className="section-light relative z-10 scroll-mt-20 bg-ivory"
    >
      <div className="container-page section-pad">
        <div className="grid gap-10 border-t border-navy/15 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              01 / Who we are
            </p>
            <SectionTitle
              text="About the fest"
              className="max-w-[9ch] text-[clamp(2.8rem,6.5vw,5.8rem)]"
            />
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-9" delay={0.1}>
            <div className="body-copy max-w-xl space-y-5">
              <p className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.03em] text-navy sm:text-3xl">
                {SITE.subtitle}
              </p>
              <p>
                Venture Verse is the premier annual techno-management festival
                organized by the Department of CSBS &amp; CSE at Oriental Group
                of Institutes, Bhopal.
              </p>
              <p>
                Conceived as a battleground for innovators, it celebrates the
                convergence of technical development, financial acumen, and
                executive presence.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid items-center gap-12 sm:mt-24 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Reveal>
            <AboutVisual />
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              The institution
            </p>
            <h3 className="display-title max-w-[12ch] text-[clamp(2.1rem,4.5vw,3.8rem)]">
              Built for the next generation of leaders.
            </h3>
            <div className="body-copy mt-6 max-w-lg space-y-4">
              <p>
                Founded with a vision to impart world-class technical and
                professional education, Oriental Group of Institutes (OGI),
                Bhopal is a premier educational conglomerate known for academic
                excellence, innovation, and industry leadership in Central
                India.
              </p>
              <p>
                Driven by the Department of CSBS &amp; CSE, the institution
                bridges computational intelligence with real-world enterprise
                management, empowering students to pioneer cutting-edge
                solutions for global challenges.
              </p>
            </div>

            <ul className="mt-9 border-t border-navy/15">
              {FLAGSHIP_EVENTS.map((event) => (
                <li
                  key={event.name}
                  className="grid grid-cols-[2.4rem_1fr_auto] items-baseline gap-3 border-b border-navy/15 py-4 sm:grid-cols-[3.5rem_1fr_auto]"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-navy/75">
                    {event.index}
                  </span>
                  <span className="font-display text-lg font-medium tracking-[-0.02em] text-navy">
                    {event.name}
                  </span>
                  <span className="font-body text-xs leading-relaxed text-navy/70 sm:text-right">
                    {event.format}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20 sm:mt-24" delay={0.08}>
          <div className="grid gap-8 border-t border-navy/15 pt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">
                <span className="eyebrow-line" aria-hidden="true" />
                Festival film
              </p>
              <h3 className="display-title text-[clamp(2rem,4vw,3.4rem)]">
                The energy, in motion.
              </h3>
              <p className="body-copy mt-5 max-w-sm text-sm">
                Step inside the rooms, stages, and conversations that carry
                Venture Verse from an idea into a shared experience.
              </p>
            </div>

            <div className="lg:col-span-8">
              <figure className="clip-corner overflow-hidden border border-navy/20 bg-navy shadow-panel">
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/hero-poster.jpg"
                  className="aspect-video w-full bg-navy object-cover"
                  aria-label="Venture Verse festival film"
                >
                  <source
                    src="/videos/venture-background.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video element.
                </video>
                <figcaption className="flex flex-col gap-2 border-t border-ivory/15 bg-charcoal px-4 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
                  <span>Venture Verse / Festival film</span>
                  <span>Cinematic Reel · venture-background</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
