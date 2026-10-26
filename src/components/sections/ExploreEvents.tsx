import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { EVENT_CATEGORIES, EVENT_PATH, type EventCategory } from "../../data/site";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { SectionTitle } from "../ui/SectionTitle";

type PositionedCategory = EventCategory & {
  x: number;
  y: number;
};

export function ExploreEvents() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const endDotRef = useRef<SVGCircleElement | null>(null);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeRef = useRef(-1);
  const [positions, setPositions] = useState<PositionedCategory[]>([]);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    setPositions(
      EVENT_CATEGORIES.map((category) => {
        const point = path.getPointAtLength(length * category.progress);
        return { ...category, x: point.x, y: point.y };
      }),
    );
  }, []);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap || positions.length === 0) return;

    const length = path.getTotalLength();

    if (reduced) {
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.set(dot, { opacity: 1, scale: 1 });
        const label = dot.querySelector(".event-label");
        if (label) gsap.set(label, { opacity: 1, color: "#F4EFE4" });
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(dotRefs.current, {
        opacity: 0.22,
        scale: 1,
        backgroundColor: "rgba(101,119,137,0.72)",
      });
      gsap.set(".event-label", { opacity: 0.55 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 60%",
          end: "bottom 82%",
          scrub: 1,
          onUpdate: () => {
            const offset = Number(gsap.getProperty(path, "strokeDashoffset"));
            const progress = 1 - offset / length;

            let active = -1;
            positions.forEach((category, index) => {
              if (progress >= category.progress) active = index;
            });

            if (active !== activeRef.current) {
              activeRef.current = active;
              positions.forEach((category, index) => {
                const dot = dotRefs.current[index];
                if (!dot) return;
                const isActive = index <= active;
                gsap.to(dot, {
                  opacity: isActive ? 1 : 0.22,
                  scale: isActive ? 1.35 : 1,
                  backgroundColor: isActive
                    ? "#B59A65"
                    : "rgba(101,119,137,0.72)",
                  duration: 0.28,
                  ease: "back.out(1.6)",
                  overwrite: true,
                });

                const label = dot.querySelector(".event-label");
                if (label) {
                  gsap.to(label, {
                    opacity: isActive ? 1 : 0.55,
                    color: isActive ? "#F4EFE4" : "rgba(244,239,228,0.65)",
                    duration: 0.28,
                    overwrite: true,
                  });
                }
              });
            }

            if (endDotRef.current) {
              gsap.to(endDotRef.current, {
                attr: { r: progress > 0.99 ? 8 : 0 },
                duration: 0.4,
                overwrite: true,
              });
            }
          },
        },
      });

      timeline.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 });
    }, wrap);

    return () => ctx.revert();
  }, [positions, reduced]);

  return (
    <section
      id="events"
      className="section-dark relative z-10 scroll-mt-20 overflow-hidden bg-navy"
    >
      <div className="container-page section-pad">
        <div className="border-t border-ivory/15 pt-10 text-center lg:pt-12">
          <p className="eyebrow mb-6 justify-center">
            <span className="eyebrow-line" aria-hidden="true" />
            02 / The programme
            <span className="eyebrow-line" aria-hidden="true" />
          </p>
          <SectionTitle
            text="Explore events"
            className="text-[clamp(3rem,8vw,7rem)]"
          />
          <p className="body-copy mx-auto mt-5 max-w-xl text-pretty">
            A rotating programme of formats built for people who make things.
            Follow the line through the categories shaping the next edition.
          </p>
        </div>

        <div
          ref={wrapRef}
          className="relative mx-auto mt-14 w-full max-w-[500px] px-8 sm:mt-20"
          style={{ aspectRatio: "637 / 2658" }}
        >
          <svg
            viewBox="0 0 637 2660"
            fill="none"
            className="absolute left-0 top-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="event-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={EVENT_PATH}
              stroke="rgba(101,119,137,0.55)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              ref={pathRef}
              d={EVENT_PATH}
              stroke="#B59A65"
              strokeWidth="3.2"
              strokeLinecap="round"
              opacity="0.9"
            />
            <circle cx="44" cy="82" r="5" fill="#B59A65" />
            <circle
              cx="247.5"
              cy="2658"
              r="8"
              fill="none"
              stroke="#F4EFE4"
              strokeWidth="2"
              opacity="0.45"
            />
            <circle ref={endDotRef} cx="247.5" cy="2658" r="0" fill="#F4EFE4" />
          </svg>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {positions.map((category, index) => {
              const desktopSide = category.shouldFlip
                ? category.side === "left"
                  ? "right"
                  : "left"
                : category.side;
              const isLeft = desktopSide === "left";
              const lineLength = category.length;

              return (
                <div
                  key={category.label}
                  className="absolute"
                  style={{
                    left: `${(category.x / 637) * 100}%`,
                    top: `${(category.y / 2660) * 100}%`,
                  }}
                >
                  <div
                    ref={(node) => {
                      dotRefs.current[index] = node;
                    }}
                    className="event-dot absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate/80"
                  >
                    <span
                      className="absolute top-0 h-px border-t border-dashed border-ivory/25"
                      style={{
                        width: lineLength,
                        [isLeft ? "right" : "left"]: 0,
                      }}
                    />
                    <span
                      className={`event-label absolute top-0 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-ivory/65 ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                      style={{
                        [isLeft ? "right" : "left"]: lineLength + 14,
                      }}
                    >
                      {category.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-0 lg:hidden">
            {positions.map((category) => (
              <div
                key={category.label}
                className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate/80"
                style={{
                  left: `${(category.x / 637) * 100}%`,
                  top: `${(category.y / 2660) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-0 border-t border-ivory/15 sm:grid-cols-3 lg:hidden">
          {EVENT_CATEGORIES.map((category, index) => (
            <li
              key={category.label}
              className="flex items-baseline gap-2 border-b border-ivory/15 py-3"
            >
              <span className="font-mono text-[9px] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-xs leading-snug text-ivory/75">
                {category.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-ivory/50">
          12 categories / Full programme and dates to be announced
        </p>
      </div>
    </section>
  );
}
