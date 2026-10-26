import { PARTNER_SLOTS } from "../../data/site";
import { ClipButton } from "../ui/ClipButton";
import { Marquee } from "../ui/Marquee";
import { PartnerCard } from "../ui/PartnerCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Sponsors() {
  return (
    <section id="sponsors" className="relative z-10 scroll-mt-20">
      <div className="container-page pt-10 lg:pt-12">
        <div className="flex flex-col gap-8 border-t border-cream/10 pt-10 lg:flex-row lg:items-end lg:justify-between lg:pt-12">
          <div>
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              03 / Partners
            </p>
            <SectionTitle
              text="Past sponsors"
              className="text-[clamp(2.8rem,6.5vw,5.8rem)]"
            />
          </div>
          <p className="body-copy max-w-sm text-sm lg:pb-2 lg:text-right">
            The partner archive is being assembled. Sponsor slots for the next
            edition are open.
          </p>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <Marquee
          items={PARTNER_SLOTS}
          ariaLabel="Sponsor placeholders"
          speed={24}
          mask
          renderItem={(slot, index) => (
            <PartnerCard slot={slot} variant={index} />
          )}
        />
      </div>

      <div className="container-page mt-12">
        <div className="flex flex-col gap-5 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/30">
            Sponsor line-up to be announced
          </p>
          <ClipButton href="#contact" variant="ghost" className="!h-10 !px-5">
            Become a partner
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
