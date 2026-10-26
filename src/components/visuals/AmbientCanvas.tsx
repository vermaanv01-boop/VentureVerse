import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (let line = 0; line < 6; line += 1) {
        const base = height * (0.58 + line * 0.058);
        const alpha = 0.16 - line * 0.018;
        context.beginPath();

        for (let x = -20; x <= width + 20; x += 10) {
          const waveOne =
            Math.sin(x * 0.0032 + time * 0.00018 + line * 0.72) * 26;
          const waveTwo =
            Math.sin(x * 0.0011 - time * 0.00012 + line * 1.4) * 18;
          const y = base + waveOne + waveTwo;

          if (x === -20) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.strokeStyle = `rgba(182, 106, 69, ${Math.max(alpha, 0.035)})`;
        context.lineWidth = 1;
        context.stroke();
      }

      if (!reduced) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-full opacity-60"
      aria-hidden="true"
    />
  );
}
