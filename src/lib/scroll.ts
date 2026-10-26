import Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(next: Lenis | null) {
  instance = next;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  const element = document.getElementById(id);

  if (!element) return;

  if (instance) {
    instance.scrollTo(element, {
      offset: -72,
      duration: prefersReducedMotion() ? 0 : 1.15,
    });
  } else {
    element.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  if (window.location.hash !== hash) {
    window.history.replaceState(null, "", hash);
  }
}

export function lockScroll() {
  if (instance) {
    instance.stop();
  } else {
    document.body.style.overflow = "hidden";
  }
}

export function unlockScroll() {
  if (instance) {
    instance.start();
  } else {
    document.body.style.overflow = "";
  }
}
