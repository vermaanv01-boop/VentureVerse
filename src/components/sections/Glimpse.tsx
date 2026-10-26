import type { CSSProperties, KeyboardEvent, TouchEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ARCHIVE_ITEMS } from "../../data/site";
import { ArchiveVisual } from "../visuals/ArchiveVisual";
import { SectionTitle } from "../ui/SectionTitle";

function getCardStyle(
  offset: number,
  width: number,
  height: number,
): CSSProperties {
  const horizontalStep = width * 0.34;
  const horizontalFar = width * 0.58;
  const depth = height * 0.5;
  const depthFar = height * 0.92;
  const depthHidden = height * 1.46;

  if (offset === 0) {
    return {
      transform: "translateX(0px) translateZ(0px) scale(1) rotateY(0deg)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
      pointerEvents: "none",
    };
  }

  if (offset === 1) {
    return {
      transform: `translateX(${horizontalStep}px) translateZ(-${depth}px) rotateY(-15deg) scale(0.88)`,
      zIndex: 8,
      opacity: 0.85,
      filter: "brightness(0.72)",
      pointerEvents: "auto",
    };
  }

  if (offset === -1) {
    return {
      transform: `translateX(-${horizontalStep}px) translateZ(-${depth}px) rotateY(15deg) scale(0.88)`,
      zIndex: 8,
      opacity: 0.85,
      filter: "brightness(0.72)",
      pointerEvents: "auto",
    };
  }

  if (offset === 2) {
    return {
      transform: `translateX(${horizontalFar}px) translateZ(-${depthFar}px) rotateY(-25deg) scale(0.75)`,
      zIndex: 5,
      opacity: 0.5,
      filter: "brightness(0.5)",
      pointerEvents: "auto",
    };
  }

  if (offset === -2) {
    return {
      transform: `translateX(-${horizontalFar}px) translateZ(-${depthFar}px) rotateY(25deg) scale(0.75)`,
      zIndex: 5,
      opacity: 0.5,
      filter: "brightness(0.5)",
      pointerEvents: "auto",
    };
  }

  return {
    transform: `translateX(0px) translateZ(-${depthHidden}px) scale(0.6)`,
    zIndex: 1,
    opacity: 0,
    filter: "brightness(0.3)",
    pointerEvents: "none",
  };
}

export function Glimpse() {
  const items = ARCHIVE_ITEMS;
  const [active, setActive] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const touchStart = useRef(0);

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setSize({ width, height: (width * 9) / 16 });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const move = useCallback(
    (direction: number) => {
      setActive((current) => (current + direction + items.length) % items.length);
    },
    [items.length],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) {
      move(delta < 0 ? 1 : -1);
    }
  };

  return (
    <section
      id="glimpse"
      className="section-light relative z-10 scroll-mt-20 overflow-hidden bg-ivory"
    >
      <div className="container-page section-pad">
        <div className="border-t border-navy/15 pt-10 text-center lg:pt-12">
          <p className="eyebrow mb-6 justify-center">
            <span className="eyebrow-line" aria-hidden="true" />
            05 / The archive
            <span className="eyebrow-line" aria-hidden="true" />
          </p>
          <SectionTitle
            text="Glimpse of Venture Verse"
            className="text-[clamp(2.6rem,6.5vw,5.8rem)]"
          />
          <p className="body-copy mx-auto mt-5 max-w-xl text-pretty">
            A look back at the rooms, stages, and people that shaped the
            previous Venture Verse ceremonies.
          </p>
        </div>

        <div
          className="mx-auto mt-14 w-full sm:mt-20"
          style={{ maxWidth: "min(860px, 92vw)" }}
          onKeyDown={handleKeyDown}
        >
          <div
            ref={viewportRef}
            className="relative w-full outline-offset-8"
            style={{
              height: size.height || undefined,
              aspectRatio: size.height ? undefined : "16 / 9",
              perspective: size.width ? size.width * 3.6 : 1400,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Glimpse of Venture Verse"
          >
            <div
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {items.map((item, index) => {
                let offset = (index - active + items.length) % items.length;
                if (offset > items.length / 2) offset -= items.length;

                const isActive = offset === 0;
                const isClickable = Math.abs(offset) <= 2 && offset !== 0;
                const cardStyle = getCardStyle(offset, size.width, size.height);

                if (!size.width || Math.abs(offset) > 3) return null;

                return (
                  <div
                    key={item.index}
                    className="clip-corner absolute overflow-hidden border border-navy/20 bg-navy shadow-panel transition-[transform,opacity,filter] duration-500 ease-out"
                    style={{
                      width: size.width,
                      height: size.height,
                      left: 0,
                      top: 0,
                      cursor: isClickable ? "pointer" : "default",
                      willChange: "transform, opacity, filter",
                      ...cardStyle,
                    }}
                    onClick={() => {
                      if (isClickable) move(offset > 0 ? 1 : -1);
                    }}
                    aria-hidden={!isActive}
                  >
                    <ArchiveVisual
                      item={item}
                      active={isActive}
                      priority={Math.abs(offset) <= 1}
                    />
                    {!isActive ? (
                      <span className="sr-only">
                        Slide {index + 1}: {item.alt}
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 sm:mt-10">
            <div className="flex items-center justify-center gap-5 sm:gap-8">
              <button
                type="button"
                onClick={() => move(-1)}
                className="clip-corner group flex h-11 w-14 items-center justify-center bg-navy text-ivory transition-colors duration-200 hover:bg-gold hover:text-navy active:scale-95 sm:h-12 sm:w-16"
                aria-label="Previous slide"
              >
                <ArrowLeft
                  size={19}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <div
                className="clip-tag flex min-w-[6.5rem] items-center justify-center border border-navy/15 bg-navy/[0.04] px-5 py-2.5"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-navy">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                className="clip-corner group flex h-11 w-14 items-center justify-center bg-navy text-ivory transition-colors duration-200 hover:bg-gold hover:text-navy active:scale-95 sm:h-12 sm:w-16"
                aria-label="Next slide"
              >
                <ArrowRight
                  size={19}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>

            <p className="text-center font-mono text-[9px] uppercase tracking-[0.18em] text-navy/55">
              Swipe, click a side card, or use the arrow keys
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-center font-body text-xs leading-relaxed text-navy/50">
            Sixteen frames from the Venture Verse archive. Use the controls or
            swipe to move through the previous ceremonies.
          </p>
        </div>
      </div>
    </section>
  );
}
