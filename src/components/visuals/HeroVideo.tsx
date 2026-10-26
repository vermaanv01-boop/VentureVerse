import { useState } from "react";

export function HeroVideo() {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <div
      className="hero-video-container pointer-events-none fixed inset-0 z-0 h-[100dvh]"
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
        style={{ backgroundImage: "url('/images/hero-poster.svg')" }}
      />
      {!failed ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.svg"
          disablePictureInPicture
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/videos/venture-background.mp4" type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/32 to-ink" />
      <div className="absolute inset-0 bg-copper/5" />
    </div>
  );
}
