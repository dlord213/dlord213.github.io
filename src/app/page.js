"use client";

import { useEffect } from "react";
import { MediaPage } from "./components/MediaPage";
import { LandingPage } from "./components/LandingPage";
import { LanguagePage } from "./components/LanguagePage";
import { SecondSectionPage } from "./components/SecondSectionPage";
import ContactPage from "./components/ContactPage";
import { ReactLenis } from "@studio-freight/react-lenis";

const Home = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
        } else {
          entry.target.classList.remove("animate-show");
        }
      });
    });

    const elements = document.querySelectorAll(".animate-hidden");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <ReactLenis root>
      <main className="flex min-h-screen flex-col items-center">
        <LandingPage />
        <SecondSectionPage />
        <LanguagePage />
        <MediaPage />
        <ContactPage />
      </main>
    </ReactLenis>
  );
};

export default Home;
