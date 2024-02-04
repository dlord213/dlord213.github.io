"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "next-themes";
import "./dynamic_bg.css";
import { createRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { Work_Sans } from "next/font/google";
import Sidebar from "./newComponents/sidebar";
import ProjectSection from "./sections/projects_section";
import HeadingSection from "./sections/heading_section";
import { combinedImgs } from "./newComponents/listImages";

const font = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  style: ["normal"],
});

function ArtworkSection() {
  let animationFrameId;

  function onMouseOutHandler() {
    const scrollSpeed = 3;
    document.querySelector(".artwork-container").scrollLeft += scrollSpeed;

    animationFrameId = requestAnimationFrame(onMouseOutHandler);
  }

  function onLoadHandler() {
    const scrollSpeed = 3;
    document.querySelector(".artwork-container").scrollLeft += scrollSpeed;

    animationFrameId = requestAnimationFrame(onLoadHandler);
  }

  function onMouseOverHandler() {
    cancelAnimationFrame(animationFrameId);
  }

  return (
    <>
      <div className="flex flex-row justify-between items-end">
        <h1 className="text-2xl font-bold mt-4 md:block hidden">Artworks</h1>
        <h1 className="font-bold mt-4 md:block hidden">
          Hover to auto-scroll
        </h1>
      </div>
      <div
        className="md:flex hidden flex-row gap-4 overflow-hidden h-[480px] artwork-container"
        onMouseOut={onMouseOutHandler}
        onMouseOver={onMouseOverHandler}
        onLoad={() => onLoadHandler()}
      >
        {combinedImgs.map((index) => (
          <img
            src={index.src}
            className="w-full h-full aspect-square"
            alt=""
            key={index.src}
          />
        ))}
      </div>
    </>
  );
}

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
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}
