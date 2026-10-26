import { SITE } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { AboutVisual } from "../visuals/AboutVisual";

const PRINCIPLES = [
  {
    index: "01",
    title: "Build in public",
    detail: "Share the work, not just the outcome.",
  },
  {
    index: "02",
    title: "Learn from operators",
    detail: "Bring practitioners into the room.",
  },
  {
    index: "03",
    title: "Make room for first-timers",
    detail: "Curiosity is the only prerequisite.",
  },
];

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-20">
      <div className="container-page section-pad">
        <div className="grid gap-10 border-t border-cream/10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              01 / The club
            </p>
            <SectionTitle
              text="About Venture Verse"
              className="max-w-[9ch] text-[clamp(2.8rem,6.5vw,5.8rem)]"
            />
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-9" delay={0.1}>
            <div className="body-copy max-w-xl space-y-5">
              <p>
                {SITE.name} is a student-led entrepreneurship and innovation
                community. We bring together people who would rather test an
                idea than wait for permission — founders, designers, engineers,
                operators, and researchers.
              </p>
              <p>
                Our work sits between the classroom and the real world:
                conversations with practitioners, build sprints, critiques, and
                the kind of rooms where honest questions are welcome.
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
              Why we exist
            </p>
            <h3 className="display-title max-w-[12ch] text-[clamp(2.1rem,4.5vw,3.8rem)]">
              Momentum is made together.
            </h3>
            <div className="body-copy mt-6 max-w-lg space-y-4">
              <p>
                We believe the first step is easier when it is shared. Venture
                Verse exists to make that first step less lonely and the next
                one more ambitious.
              </p>
            </div>

            <ul className="mt-9 border-t border-cream/10">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle.index}
                  className="grid grid-cols-[2.4rem_1fr] gap-3 border-b border-cream/10 py-4 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-copper-light">
                    {principle.index}
                  </span>
                  <span className="font-display text-lg font-medium tracking-[-0.02em] text-cream">
                    {principle.title}
                  </span>
                  <span className="col-start-2 font-body text-sm leading-relaxed text-cream/45 sm:col-start-3 sm:max-w-[15rem] sm:text-right">
                    {principle.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
