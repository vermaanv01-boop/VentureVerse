import { SPEAKER_SLOTS } from "../../data/site";
import { ClipButton } from "../ui/ClipButton";
import { Marquee } from "../ui/Marquee";
import { SectionTitle } from "../ui/SectionTitle";
import { SpeakerCard } from "../ui/SpeakerCard";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="section-dark relative z-10 scroll-mt-20 bg-navy pb-16 pt-24 md:pb-24 md:pt-32"
    >
      <div className="container-page">
        <div className="flex flex-col gap-8 border-t border-ivory/15 pt-10 lg:flex-row lg:items-end lg:justify-between lg:pt-12">
          <p className="body-copy max-w-sm text-sm">
            The line-up is being curated. Expect candid conversations with
            founders, operators, researchers, and people who have built through
            uncertainty.
          </p>
          <div className="lg:text-right">
            <p className="eyebrow mb-6 lg:justify-end">
              <span className="eyebrow-line" aria-hidden="true" />
              04 / Voices
            </p>
            <SectionTitle
              text="Past speakers"
              className="text-[clamp(2.8rem,6.5vw,5.8rem)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <Marquee
          items={SPEAKER_SLOTS}
          ariaLabel="Speaker line-up preview"
          speed={22}
          mask
          renderItem={(slot) => <SpeakerCard slot={slot} />}
        />
      </div>

      <div className="container-page mt-12">
        <div className="flex flex-col gap-5 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/65">
            Speaker line-up to be announced
          </p>
          <ClipButton href="#contact" variant="ghost" className="!h-10 !px-5">
            Nominate a speaker
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
