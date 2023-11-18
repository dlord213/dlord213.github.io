"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "next-themes";
import LandingPage from "./components/HomeComponents/LandingPage/LandingPage";
import BeforeLandingPage from "./components/HomeComponents/BeforeLandingPage";
import ArtworksPage from "./components/HomeComponents/ArtworksPage/ArtworksPage";
import { ProjectsPage } from "./components/HomeComponents/ProjectsPage/ProjectsPage";
import { DesignLayoutPage } from "./components/HomeComponents/DesignLayoutPage/DesignLayoutPage";
import { DynamicBG } from "./components/HomeComponents/DynamicBG";
import "./dynamic_bg.css";
import { MusicPage } from "./components/HomeComponents/MusicPage/MusicPage";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ThemeProvider attribute="class">
      <ReactLenis ref={lenisRef} autoRaf={false} root>
        <main className="2xl:p-24 lg:p-16">
          <DynamicBG />
          <BeforeLandingPage />
          <LandingPage />
          <ProjectsPage />
          <ArtworksPage />
          <DesignLayoutPage />
          <MusicPage />
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}
