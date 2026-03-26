import CallToAction from "./Components/CallToAction";
import DashboardSection from "./Components/DashboardSection";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navabar from "./Components/Navabar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

import { useEffect } from "react";
import ScrollReveal from "./Components/Animations/ScrollReveal";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <div>
        <Navabar />

        <main className="overflow-x-hidden">
          <ScrollReveal direction="up">
            <Hero />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Features />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <DashboardSection />
          </ScrollReveal>

          <ScrollReveal direction="up">
            <Pricing />
          </ScrollReveal>

          <ScrollReveal direction="left">
            <Testimonials />
          </ScrollReveal>

          <ScrollReveal direction="down" delay={0.2}>
            <CallToAction />
          </ScrollReveal>
        </main>

        <Footer />
    </div>
  );
}

export default App;
