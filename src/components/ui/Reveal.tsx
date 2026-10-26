import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 26,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: distance, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.95,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, [delay, distance, reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
