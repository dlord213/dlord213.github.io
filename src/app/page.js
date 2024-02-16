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
import Link from "next/link";

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
            <ArtworkSection />
            <h1 className="text-2xl font-bold mt-2">Web Small Projects</h1>
            <div className="flex flex-row flex-wrap gap-2 flex-1">
              <Link href="/web-projects/100-days-of-poetry">
                <button
                  className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500"
                  onClick={() => {
                    document.querySelector("body").style.backgroundColor =
                      "white";
                  }}
                >
                  100 Days of Poetry
                </button>
              </Link>
              <Link href="/web-projects/animal-facts-generator">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Animal Facts Generator
                </button>
              </Link>
              <Link href="/web-projects/card-checker">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Card Checker
                </button>
              </Link>
              <Link href="/web-projects/channel-orange">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Channel Orange
                </button>
              </Link>
              <Link href="/web-projects/dicfinition">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Dicfinition
                </button>
              </Link>
              <Link href="/web-projects/gradient-generator">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Gradient Generator
                </button>
              </Link>
              <Link href="/web-projects/hobbies-generator">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Hobbies Generator
                </button>
              </Link>
              <Link href="/web-projects/nymsfinder">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Nymsfinder
                </button>
              </Link>
              <Link href="/web-projects/quote-generator">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Quote Generator
                </button>
              </Link>
              <Link href="/web-projects/trivia-generator">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Trivia Generator
                </button>
              </Link>
              <Link href="/web-projects/weather-checker">
                <button className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
                  Weather Checker
                </button>
              </Link>
            </div>
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}
