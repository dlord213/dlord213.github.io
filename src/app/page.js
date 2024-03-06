"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "next-themes";
import "./dynamic_bg.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Work_Sans } from "next/font/google";
import Sidebar from "./components/sidebar";
import ProjectSection from "./sections/projects_section";
import HeadingSection from "./sections/heading_section";
import ArtworkSection from "./sections/artwork_section";
import WebSmallProjectsSection from "./sections/web_small_projects_section";

const font = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  style: ["normal"],
});

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
        <nav className={font.className + " md:flex hidden"}>
          <Sidebar />
        </nav>
        <main className={font.className + " flex flex-col items-center"}>
          <div className="flex flex-col gap-2 p-8 md:w-[75%]">
            <HeadingSection />
            <ProjectSection />
            <WebSmallProjectsSection />
            <ArtworkSection />
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}
