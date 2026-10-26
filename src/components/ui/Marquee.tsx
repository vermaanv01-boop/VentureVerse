import { Pause, Play } from "lucide-react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type MarqueeProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  ariaLabel: string;
  speed?: number;
  className?: string;
  mask?: boolean;
};

export function Marquee<T>({
  items,
  renderItem,
  ariaLabel,
  speed = 30,
  className = "",
  mask = false,
}: MarqueeProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstSetRef = useRef<HTMLUListElement | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
    pointerId: -1,
  });
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (reduced) setPaused(true);
  }, [reduced]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    let frame = 0;
    let last = performance.now();
    let setWidth = firstSet.getBoundingClientRect().width;

    const apply = () => {
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    };

    const normalize = () => {
      if (setWidth <= 0) return;

      while (offsetRef.current <= -setWidth) {
        offsetRef.current += setWidth;
      }

      while (offsetRef.current > 0) {
        offsetRef.current -= setWidth;
      }
    };

    const loop = (now: number) => {
      const delta = Math.min(now - last, 64);
      last = now;

      if (!pausedRef.current && !dragRef.current.active) {
        offsetRef.current -= (speed * delta) / 1000;
        normalize();
        apply();
      }

      frame = window.requestAnimationFrame(loop);
    };

    const measure = () => {
      setWidth = firstSet.getBoundingClientRect().width;
      normalize();
      apply();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(firstSet);

    apply();
    frame = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [items, speed]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startOffset: offsetRef.current,
      pointerId: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const track = trackRef.current;
    if (!track) return;

    offsetRef.current =
      dragRef.current.startOffset + (event.clientX - dragRef.current.startX);
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const firstSet = firstSetRef.current;
    const track = trackRef.current;
    if (!firstSet || !track) return;

    const setWidth = firstSet.getBoundingClientRect().width;
    if (setWidth > 0) {
      while (offsetRef.current <= -setWidth) {
        offsetRef.current += setWidth;
      }
      while (offsetRef.current > 0) {
        offsetRef.current -= setWidth;
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  return (
    <div className={className}>
      <div
        className={`cursor-grab overflow-hidden active:cursor-grabbing ${
          mask ? "marquee-mask" : ""
        }`}
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="region"
        aria-label={ariaLabel}
      >
        <div ref={trackRef} className="flex w-max">
          <ul ref={firstSetRef} className="flex w-max shrink-0">
            {items.map((item, index) => (
              <li key={`primary-${index}`} className="shrink-0">
                {renderItem(item, index)}
              </li>
            ))}
          </ul>
          <ul className="flex w-max shrink-0" aria-hidden="true">
            {items.map((item, index) => (
              <li key={`duplicate-${index}`} className="shrink-0">
                {renderItem(item, index)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={`${ariaLabel}: ${paused ? "play" : "pause"} motion`}
          className="marquee-control inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]"
        >
          {paused ? (
            <Play size={12} aria-hidden="true" />
          ) : (
            <Pause size={12} aria-hidden="true" />
          )}
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
