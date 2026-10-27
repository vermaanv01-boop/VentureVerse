import { useEffect, useRef } from "react";
import { ARCHIVE_ITEMS } from "../../data/site";
import { SectionTitle } from "../ui/SectionTitle";
import { gsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function Glimpse() {
  const items = ARCHIVE_ITEMS;
  const reducedMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const masksRef = useRef<HTMLDivElement[]>([]);
  const captionsRef = useRef<HTMLDivElement[]>([]);
  const frameCountRef = useRef<HTMLSpanElement | null>(null);
  const totalRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    slidesRef.current = Array.from(
      track.querySelectorAll<HTMLElement>("[data-glimpse-slide]"),
    );
    masksRef.current = Array.from(
      track.querySelectorAll<HTMLElement>("[data-glimpse-mask]"),
    );
    captionsRef.current = Array.from(
      track.querySelectorAll<HTMLElement>("[data-glimpse-caption]"),
    );

    if (totalRef.current) {
      totalRef.current.textContent = String(items.length).padStart(2, "0");
    }

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(track, { x: 0 });
        slidesRef.current.forEach((slide, index) => {
          gsap.set(slide, { opacity: index === 0 ? 1 : 0.4 });
        });
        masksRef.current.forEach((mask) => {
          gsap.set(mask, { scaleX: 1 });
        });
        captionsRef.current.forEach((cap, index) => {
          gsap.set(cap, { y: 0, opacity: index === 0 ? 1 : 0.6 });
        });
        if (frameCountRef.current) {
          frameCountRef.current.textContent = String(1).padStart(2, "0");
        }
        return;
      }

      const totalSlides = slidesRef.current.length;
      if (totalSlides === 0) return;

      gsap.set(track, { xPercent: 0 });
      slidesRef.current.forEach((slide, i) => {
        gsap.set(slide, { xPercent: i * 100, scale: 1 });
      });

      masksRef.current.forEach((mask) => {
        gsap.set(mask, { scaleX: 1, transformOrigin: "left center" });
      });

      captionsRef.current.forEach((cap, i) => {
        gsap.set(cap, { y: i === 0 ? 0 : 40, opacity: i === 0 ? 1 : 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + (totalSlides * 140) + "%",
          pin: pin,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < totalSlides - 1; i++) {
        tl.to(track, { xPercent: -(i + 1) * 100, ease: "none", duration: 1 }, i);
        tl.to(slidesRef.current[i + 1], { scale: 1.015, duration: 1, ease: "none" }, i);
        tl.to(slidesRef.current[i], { scale: 0.985, duration: 1, ease: "none" }, i);
        tl.to(masksRef.current[i + 1], { scaleX: 0, transformOrigin: "right center", duration: 0.6, ease: "power2.inOut" }, i + 0.1);
        tl.to(masksRef.current[i], { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power2.inOut" }, i + 0.2);
        tl.to(captionsRef.current[i], { y: -30, opacity: 0, duration: 0.4, ease: "power2.out" }, i);
        tl.to(captionsRef.current[i + 1], { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, i + 0.25);
        tl.call(() => {
          if (frameCountRef.current) {
            frameCountRef.current.textContent = String(i + 2).padStart(2, "0");
          }
        }, [], i + 0.3);
      }
      tl.to({}, { duration: 0.1 });
    }, section);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        try {
          const st = (gsap as any).globals?.ScrollTrigger || (gsap as any).ScrollTrigger;
          if (st && st.refresh) st.refresh();
        } catch {}
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [items.length, reducedMotion]);

  return (
    <section id="glimpses" ref={sectionRef} className="section-light relative z-10 scroll-mt-20 overflow-hidden bg-ivory">
      <div className="container-page section-pad pb-0">
        <div className="border-t border-navy/15 pt-10 text-center lg:pt-12">
          <p className="eyebrow mb-6 justify-center">
            <span className="eyebrow-line" aria-hidden="true" />
            06 / The archive
            <span className="eyebrow-line" aria-hidden="true" />
          </p>
          <SectionTitle text="Glimpses of Venture Verse" className="text-[clamp(2.6rem,6.5vw,5.8rem)]" />
          <p className="body-copy mx-auto mt-5 max-w-xl text-pretty">
            Experience the incredible energy, innovation, and legacy of Venture Verse — a journey through our past editions.
          </p>
        </div>
      </div>

      <div ref={pinRef} className="relative h-[100svh] w-full overflow-hidden">
        <div ref={trackRef} className="absolute left-0 top-0 flex h-full w-full will-change-transform">
          {items.map((item, index) => (
            <article key={item.index} data-glimpse-slide className="relative h-full w-full flex-shrink-0" aria-roledescription="slide" aria-label={`Slide ${index + 1} of ${items.length}`}>
              <div className="relative h-full w-full overflow-hidden bg-navy">
                <img src={item.src} srcSet={item.srcSet} sizes="100vw" width={item.width} height={item.height} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" draggable={false} className="h-full w-full object-cover" />

                <div data-glimpse-mask className="pointer-events-none absolute inset-0 bg-navy" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-transparent" aria-hidden="true" />

                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-8 sm:right-8 sm:top-8">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">VV / Glimpses</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/65">Frame {item.index}</span>
                </div>

                <div data-glimpse-caption className="absolute bottom-10 left-5 right-5 flex flex-col items-start gap-3 sm:bottom-16 sm:left-8 sm:right-8">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/70">Venture Verse Archive</span>
                  <p className="font-display text-[clamp(2.4rem,8vw,6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-ivory">{item.caption}</p>
                  <p className="max-w-xl font-body text-sm leading-relaxed text-ivory/80">{item.alt.replace("Venture Verse archive frame ", "")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-4 sm:bottom-10">
          <div className="clip-tag flex min-w-[6.5rem] items-center justify-center border border-ivory/30 bg-navy/40 px-5 py-2.5 backdrop-blur-sm" aria-live="polite" aria-atomic="true">
            <span className="font-mono text-[10px] tracking-[0.18em] text-ivory">
              <span ref={frameCountRef}>{String(1).padStart(2, "0")}</span> /{" "}
              <span ref={totalRef}>{String(items.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-20 -translate-y-1/2">
          <div className="container-page flex justify-between">
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ivory/50 lg:block">Scroll to explore</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ivory/50 lg:block">Vertical → Cinematic</span>
          </div>
        </div>
      </div>

      <div className="container-page pb-16 pt-10 sm:pb-20 sm:pt-12">
        <p className="mx-auto max-w-xl text-center font-body text-xs leading-relaxed text-navy/70">
          Sixteen frames from the Venture Verse archive. Scroll to move through the past ceremonies in a cinematic sequence.
        </p>
      </div>
    </section>
  );
}
