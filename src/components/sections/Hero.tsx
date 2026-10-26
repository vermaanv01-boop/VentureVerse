import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { SITE } from "../../data/site";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { HeroVideo } from "../visuals/HeroVideo";
import { LineArt } from "../visuals/LineArt";
import { ClipButton } from "../ui/ClipButton";

function RevealWords({
  text,
  itemClass,
  className = "",
}: {
  text: string;
  itemClass: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span
      className={`inline-flex flex-wrap ${className}`}
      aria-hidden="true"
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`inline-block overflow-hidden pb-[0.08em] align-bottom ${
            index < words.length - 1 ? "mr-[0.26em]" : ""
          }`}
        >
          <span className={`${itemClass} inline-block`}>{word}</span>
        </span>
      ))}
    </span>
  );
}

function Countdown({ targetDate }: { targetDate: string | null }) {
  const [values, setValues] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    if (!targetDate) return;

    const target = new Date(targetDate).getTime();
    if (Number.isNaN(target)) return;

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff / 3600000) % 24);
      const minutes = Math.floor((diff / 60000) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setValues({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  const cells = [
    { label: "Days", value: values.days },
    { label: "Hours", value: values.hours },
    { label: "Mins", value: values.minutes },
    { label: "Secs", value: values.seconds },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-1.5">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="border border-cream/10 bg-ink/30 px-1 py-2.5 text-center"
          >
            <div className="font-display text-xl font-medium leading-none text-cream sm:text-2xl">
              {cell.value}
            </div>
            <div className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-cream/40">
              {cell.label}
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">
        Time remaining: {targetDate ? SITE.eventDateLabel : "dates to be announced"}.
      </span>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      timeline
        .fromTo(
          ".hero-brand",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
        )
        .fromTo(
          ".hero-title-word",
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1.25,
            ease: "expo.out",
            stagger: 0.09,
          },
          0.12,
        )
        .fromTo(
          ".hero-subtitle-word",
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.028,
          },
          0.42,
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.7,
        )
        .fromTo(
          ".hero-right-lines",
          { borderColor: "rgba(243,238,231,0)" },
          {
            borderColor: "rgba(243,238,231,0.2)",
            duration: 0.9,
          },
          0.5,
        )
        .fromTo(
          ".hero-right-word",
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.03,
          },
          0.58,
        )
        .fromTo(
          ".hero-countdown",
          { autoAlpha: 0, scale: 0.96, filter: "blur(4px)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
          },
          0.76,
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.4)",
          },
          0.9,
        )
        .fromTo(
          ".hero-line-art",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.1 },
          0.3,
        )
        .fromTo(
          ".line-art-path",
          {
            strokeDasharray: (_index: number, element: SVGPathElement) =>
              element.getTotalLength(),
            strokeDashoffset: (_index: number, element: SVGPathElement) =>
              element.getTotalLength(),
          },
          {
            strokeDashoffset: 0,
            duration: 1.55,
            stagger: 0.055,
            ease: "power2.inOut",
          },
          0.55,
        );

      gsap.to(".hero-line-art-inner", {
        y: -16,
        x: 8,
        rotation: 2,
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".hero-line-art", {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const about = document.querySelector("#about");
      if (about) {
        gsap.to(".hero-video-container", {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: about,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-10 flex min-h-[100svh] w-full items-center overflow-hidden pb-14 pt-28 sm:pb-16 lg:pb-20 lg:pt-32"
    >
      <HeroVideo />

      <div
        className="hero-line-art pointer-events-none absolute right-[3%] top-[13%] z-0 hidden w-[320px] text-copper/55 lg:block xl:right-[8%] xl:w-[360px]"
        aria-hidden="true"
      >
        <div className="hero-line-art-inner">
          <LineArt className="h-auto w-full" />
        </div>
      </div>

      <div className="container-page relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-20">
          <div className="max-w-3xl">
            <div className="hero-brand mb-7 flex items-center gap-3 sm:mb-9">
              <span className="h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden="true" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-copper-light">
                {SITE.tagline}
              </span>
            </div>

            <h1
              className="font-display text-[clamp(4.1rem,10vw,9rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em] text-cream"
              aria-label={SITE.name}
            >
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="hero-title-word block">Venture</span>
              </span>
              <span className="block overflow-hidden pb-[0.08em] sm:ml-[0.32em]">
                <span className="hero-title-word hero-title-shimmer block">
                  Verse<span className="text-copper">.</span>
                </span>
              </span>
            </h1>

            <div className="mt-7 max-w-xl sm:mt-9">
              <h2
                className="text-base font-normal leading-relaxed text-cream/85 sm:text-lg"
                aria-label={SITE.subtitle}
              >
                <RevealWords
                  text={SITE.subtitle}
                  itemClass="hero-subtitle-word"
                />
              </h2>
              <p className="hero-copy mt-4 max-w-md font-body text-sm leading-[1.75] text-cream/50 sm:text-base">
                A student-led community for builders, designers, operators, and
                researchers turning curiosity into momentum.
              </p>
            </div>
          </div>

          <article className="w-full max-w-[340px] justify-self-center lg:mb-8 lg:justify-self-end">
            <h3
              className="hero-right-lines flex justify-center overflow-hidden border-y border-cream/20 py-2.5 text-center"
              aria-label="Time Remaining"
            >
              <RevealWords
                text="Time Remaining"
                itemClass="hero-right-word"
                className="justify-center"
              />
            </h3>
            <div className="hero-countdown py-4">
              <Countdown targetDate={SITE.eventDate} />
            </div>
            <p
              className="flex justify-center pb-4 text-center font-display text-base uppercase tracking-[0.1em] text-cream/80 sm:text-lg"
              aria-label={SITE.eventDateLabel}
            >
              <RevealWords
                text={SITE.eventDateLabel}
                itemClass="hero-right-word"
                className="justify-center"
              />
            </p>
            <div className="hero-cta mt-1 flex justify-center">
              <ClipButton href="#events" className="w-full justify-center">
                Explore events
              </ClipButton>
            </div>
            <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-cream/30">
              Registration details to follow
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
