"use client";

import { MediaPage } from "./components/MediaPage";
import { LandingPage } from "./components/LandingPage";
import { LanguagePage } from "./components/LanguagePage";
import { SecondSectionPage } from "./components/SecondSectionPage";
import ContactPage from "./components/ContactPage";
import { ReactLenis } from "@studio-freight/react-lenis";
import { DynamicBG } from "./components/DynamicBG";
import { LeftLayout } from "./components/LeftLayout";
import { useEffect, useState } from "react";
import { SplashPage } from "./components/SplashPage";

const Home = () => {
  const [buttonTheme, setBtnTheme] = useState(
    "text-black lg:border-b-2 border-black hover:bg-black hover:text-white"
  );
  const [theme, setTheme] = useState(" bg-white text-black accent-sky-600");
  const [themeState, setThemeState] = useState(0); // 0 = light | 1 = dark
  const [pageState, setPageState] = useState(0);

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

    const windowWidth = window.innerWidth;

    setTimeout(() => {
      setPageState(1);
    }, 5500);

    setTimeout(() => {
      if (windowWidth > 1024) {
        document
          .getElementById("dynamic-bg-wrap")
          .classList.remove("opacity-0");
        document.getElementById("dynamic-bg-wrap").classList.add("opacity-20");
      }
    }, 7000);
  }, [pageState]);

  if (pageState == 0) {
    return <SplashPage />;
  } else {
    return (
      <>
        <ReactLenis root>
          <DynamicBG />
          <LeftLayout theme={buttonTheme} />
          <button
            className={
              "fixed bottom-[5rem] left-[0rem] hidden min-[1440px]:block transition-all ease-in-out delay-0 duration-500 p-2 -rotate-90 " +
              buttonTheme
            }
            type="toggle"
            onClick={() => {
              if (themeState == 1) {
                setThemeState(0);
                setTheme(" bg-white text-black");
                setBtnTheme(
                  " text-black border-b-2 border-black p-4 hover:bg-black hover:text-white"
                );
                document
                  .getElementById("dynamic-bg-wrap")
                  .classList.remove("opacity-10");
                document
                  .getElementById("dynamic-bg-wrap")
                  .classList.add("opacity-20");
              }
              if (themeState == 0) {
                setThemeState(1);
                setTheme(" bg-slate-950 text-white");
                setBtnTheme(
                  " text-white border-b-2 border-white p-4 hover:bg-white hover:text-black"
                );
                document
                  .getElementById("dynamic-bg-wrap")
                  .classList.remove("opacity-20");
                document
                  .getElementById("dynamic-bg-wrap")
                  .classList.add("opacity-10");
              }
            }}
          >
            switch theme
          </button>
          <main className={theme + " flex min-h-screen flex-col items-center"}>
            <LandingPage />
            <SecondSectionPage />
            <LanguagePage />
            <MediaPage />
            <ContactPage />
          </main>
        </ReactLenis>
      </>
    );
  }
};

export default Home;
