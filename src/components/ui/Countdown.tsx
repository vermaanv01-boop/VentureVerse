import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate?: string | null;
  className?: string;
};

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(targetTimestamp: number): TimeRemaining {
  const difference = Math.max(0, targetTimestamp - Date.now());
  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

export function Countdown({ targetDate, className = "" }: CountdownProps) {
  // Target date for Venture Verse 2026 (or parsed from targetDate)
  const targetTimestamp = targetDate
    ? new Date(targetDate).getTime()
    : new Date("2026-04-18T09:00:00+05:30").getTime();

  const [time, setTime] = useState<TimeRemaining>(() =>
    getTimeRemaining(targetTimestamp),
  );

  useEffect(() => {
    const updateCountdown = () => {
      setTime(getTimeRemaining(targetTimestamp));
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, [targetTimestamp]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
  ];

  return (
    <div
      className={`grid grid-cols-4 gap-2 text-center ${className}`}
      role="timer"
      aria-live="off"
      aria-label={`Countdown: ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}
    >
      {units.map((unit, index) => (
        <div
          key={unit.label}
          className="relative flex flex-col items-center justify-center border-r border-navy/15 px-1 py-1.5 last:border-r-0"
        >
          <span className="font-mono text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-navy/70">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
