import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type SectionTitleProps = {
  text: string;
  className?: string;
};

export function SectionTitle({ text, className = "" }: SectionTitleProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll(".section-title-word"),
        { yPercent: 150 },
        {
          yPercent: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.065,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, [reduced, text]);

  return (
    <h2
      ref={ref}
      className={`display-title ${className}`}
      aria-label={text}
    >
      <span className="inline-flex flex-wrap">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={`inline-block overflow-hidden pb-[0.09em] align-bottom ${
              index < words.length - 1 ? "mr-[0.24em]" : ""
            }`}
          >
            <span className="section-title-word inline-block">
              {word}
            </span>
          </span>
        ))}
      </span>
    </h2>
  );
}
