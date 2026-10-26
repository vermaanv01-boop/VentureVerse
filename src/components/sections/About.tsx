import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { FLAGSHIP_EVENTS, SITE } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { AboutVisual } from "../visuals/AboutVisual";

function FestivalFilmPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM muted to satisfy browser autoplay security policies
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    };

    playVideo();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused) {
            playVideo();
          }
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <figure className="clip-corner group relative overflow-hidden border border-navy/20 bg-navy shadow-panel">
      <div
        ref={containerRef}
        className="relative aspect-video w-full cursor-pointer bg-navy overflow-hidden"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover"
          aria-label="Venture Verse festival film"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/videos/venture-background.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>

        {/* Play/Pause Center Indicator on hover / pause */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            !isPlaying
              ? "bg-navy/40 opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-navy/85 text-gold shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
            {isPlaying ? (
              <Pause size={22} fill="currentColor" aria-hidden="true" />
            ) : (
              <Play
                size={22}
                fill="currentColor"
                className="ml-1"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* Bottom controls bar: Sound toggle & Status */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!isMuted}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex items-center gap-2 rounded-sm border border-ivory/20 bg-navy/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ivory/90 backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
          >
            {isMuted ? (
              <>
                <VolumeX size={13} className="text-gold" aria-hidden="true" />
                <span>Muted</span>
              </>
            ) : (
              <>
                <Volume2 size={13} className="text-gold" aria-hidden="true" />
                <span>Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>

      <figcaption className="flex flex-col gap-2 border-t border-ivory/15 bg-charcoal px-4 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isPlaying ? "bg-emerald-400 animate-pulse" : "bg-gold"
            }`}
            aria-hidden="true"
          />
          Venture Verse / Festival Film · venture-background
        </span>
        <span>Click video to {isPlaying ? "pause" : "play"} · Loop active</span>
      </figcaption>
    </figure>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-light relative z-10 scroll-mt-20 bg-ivory"
    >
      <div className="container-page section-pad">
        <div className="grid gap-10 border-t border-navy/15 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              01 / Who we are
            </p>
            <SectionTitle
              text="About the fest"
              className="max-w-[9ch] text-[clamp(2.8rem,6.5vw,5.8rem)]"
            />
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-9" delay={0.1}>
            <div className="body-copy max-w-xl space-y-5">
              <p className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.03em] text-navy sm:text-3xl">
                {SITE.subtitle}
              </p>
              <p>
                Venture Verse is the premier annual techno-management festival
                organized by the Department of CSBS &amp; CSE at Oriental Group
                of Institutes, Bhopal.
              </p>
              <p>
                Conceived as a battleground for innovators, it celebrates the
                convergence of technical development, financial acumen, and
                executive presence.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid items-center gap-12 sm:mt-24 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Reveal>
            <AboutVisual />
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow mb-6">
              <span className="eyebrow-line" aria-hidden="true" />
              The institution
            </p>
            <h3 className="display-title max-w-[12ch] text-[clamp(2.1rem,4.5vw,3.8rem)]">
              Built for the next generation of leaders.
            </h3>
            <div className="body-copy mt-6 max-w-lg space-y-4">
              <p>
                Founded with a vision to impart world-class technical and
                professional education, Oriental Group of Institutes (OGI),
                Bhopal is a premier educational conglomerate known for academic
                excellence, innovation, and industry leadership in Central
                India.
              </p>
              <p>
                Driven by the Department of CSBS &amp; CSE, the institution
                bridges computational intelligence with real-world enterprise
                management, empowering students to pioneer cutting-edge
                solutions for global challenges.
              </p>
            </div>

            <ul className="mt-9 border-t border-navy/15">
              {FLAGSHIP_EVENTS.map((event) => (
                <li
                  key={event.name}
                  className="grid grid-cols-[2.4rem_1fr_auto] items-baseline gap-3 border-b border-navy/15 py-4 sm:grid-cols-[3.5rem_1fr_auto]"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-navy/75">
                    {event.index}
                  </span>
                  <span className="font-display text-lg font-medium tracking-[-0.02em] text-navy">
                    {event.name}
                  </span>
                  <span className="font-body text-xs leading-relaxed text-navy/70 sm:text-right">
                    {event.format}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20 sm:mt-24" delay={0.08}>
          <div className="grid gap-8 border-t border-navy/15 pt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">
                <span className="eyebrow-line" aria-hidden="true" />
                Festival film
              </p>
              <h3 className="display-title text-[clamp(2rem,4vw,3.4rem)]">
                The energy, in motion.
              </h3>
              <p className="body-copy mt-5 max-w-sm text-sm">
                Step inside the rooms, stages, and conversations that carry
                Venture Verse from an idea into a shared experience.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FestivalFilmPlayer />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
