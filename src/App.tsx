import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { ExploreEvents } from "./components/sections/ExploreEvents";
import { Glimpse } from "./components/sections/Glimpse";
import { Hero } from "./components/sections/Hero";
import { Speakers } from "./components/sections/Speakers";
import { Sponsors } from "./components/sections/Sponsors";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <div className="relative z-10 bg-navy">
          <About />
          <ExploreEvents />
          <Sponsors />
          <Speakers />
          <Glimpse />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
