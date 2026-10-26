export function PartnerMark({ variant }: { variant: number }) {
  const mark = variant % 8;

  return (
    <svg
      viewBox="0 0 64 64"
      className="h-14 w-14 text-copper-light sm:h-16 sm:w-16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.2">
        {mark === 0 ? (
          <>
            <circle cx="32" cy="32" r="18" />
            <path d="M32 8v48M8 32h48" />
            <circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {mark === 1 ? (
          <>
            <path d="M32 9 55 50H9L32 9Z" />
            <path d="M32 22v15" />
            <circle cx="32" cy="43" r="2.5" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {mark === 2 ? (
          <>
            <path d="M11 20h42M11 32h30M11 44h42" />
            <circle cx="48" cy="32" r="3" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {mark === 3 ? (
          <>
            <path d="M14 46a18 18 0 0 1 36 0" />
            <path d="M22 46a10 10 0 0 1 20 0" />
            <path d="M30 46a2 2 0 0 1 4 0" />
            <path d="M10 52h44" />
          </>
        ) : null}
        {mark === 4 ? (
          <>
            <path d="M32 8 56 32 32 56 8 32 32 8Z" />
            <path d="M32 18 46 32 32 46 18 32 32 18Z" />
            <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {mark === 5 ? (
          <>
            <path d="M32 8v48M8 32h48M15 15l34 34M49 15 15 49" />
            <circle cx="32" cy="32" r="7" fill="#111110" stroke="currentColor" />
          </>
        ) : null}
        {mark === 6 ? (
          <>
            <path d="M10 32a22 22 0 1 1 44 0" />
            <path d="M10 32h44M32 32v22" />
            <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {mark === 7 ? (
          <>
            <path d="M12 12h40v40H22V22h20v20" />
            <path d="M22 22h10v10" opacity="0.45" />
          </>
        ) : null}
      </g>
    </svg>
  );
}
