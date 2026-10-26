import { useEffect, useRef, useState } from "react";

export function HeroVideo({ paused }: { paused: boolean }) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;

    if (paused) {
      video.pause();
    } else {
      void video.play().catch(() => undefined);
    }
  }, [failed, paused]);

  return (
    <div
      className="hero-video-container pointer-events-none fixed inset-0 z-0"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 82%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 82%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div
        className="poster-drift absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
      />
      {!failed ? (
        <video
          ref={videoRef}
          autoPlay={!paused}
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          disablePictureInPicture
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            ready ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/videos/venture-background.mp4" type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-copper/5" />
    </div>
  );
}
