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
            <div className="hidden xl:flex flex-row flex-wrap gap-4 items-center pb-2">
              <img
                src="/assets/images/logos/ai.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/photoshop.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/tailwind.png"
                className="w-[64px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/bootstrap.png"
                className="w-[56px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/html.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/css.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/js.png"
                className="w-[48px] h-[48px] aspect-square rounded-lg"
              />
              <img
                src="/assets/images/logos/ts.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/discord.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/excel.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/mysql.png"
                className="w-[64px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/xampp.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/python.png"
                className="w-[48px] h-[48px] aspect-square"
              />
              <img
                src="/assets/images/logos/pyqt.png"
                className="w-[64px] h-[48px] aspect-square"
              />
            </div>
            <ProjectSection />
            <WebSmallProjectsSection />
            <ArtworkSection />
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}
