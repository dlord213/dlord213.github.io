import { useTheme } from "next-themes";
import WorkSansFont from "@/app/fonts/WorkSansFont";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const JumpButton = (props) => {
  const { element_id, title } = props;

  return (
    <button
      className={
        WorkSansFont.className +
        " hidden lg:block font-normal text-xl hover:bg-[#BE3C4D]  hover:text-white hover:px-8 transition-all delay-0 duration-500 "
      }
      onClick={() => {
        const id = document.getElementById(`${element_id}`);
        id.style.opacity = 0;
        id.classList.remove("transition-all");
        id.classList.remove("delay-0");
        id.classList.remove("duration-500");
        id.classList.remove("ease-in-out");
        id.scrollIntoView();
        setTimeout(() => {
          id.classList.add("transition-all");
          id.classList.add("delay-0");
          id.classList.add("duration-500");
          id.classList.add("ease-in-out");
        }, 1000);
        setTimeout(() => {
          id.style.opacity = 1;
        }, 1500);
      }}
    >
      {title}
    </button>
  );
};

const BeforeLandingPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const buttonsRef = useRef(null);
  const textRef = useRef(null);
  const mainDivRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        textRef.current,
        { yPercent: 0, duration: 2 },
        { yPercent: 200, duration: 2, opacity: 1 }
      );

      gsap.fromTo(
        buttonsRef.current,
        { yPercent: 1000, opacity: 0, stagger: 1, duration: 2 },
        { yPercent: -20, opacity: 1, stagger: 1, duration: 2 }
      );
    }, 1000);
  }, []);

  return (
    <div
      className="flex flex-col h-screen lg:justify-between justify-center items-center"
      ref={mainDivRef}
    >
      <div className="flex flex-col items-start opacity-0" ref={textRef}>
        <h1
          className={WorkSansFont.className + " font-bold lg:text-8xl text-4xl"}
        >
          mirimomekiku
        </h1>
        <button
          className={
            WorkSansFont.className +
            " font-light mt-2 hover:text-[#BE3C4D] transition-all duration-500 delay-0"
          }
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          switch theme
        </button>
      </div>
      <div
        className="flex flex-row absolute bottom-8 opacity-0"
        ref={buttonsRef}
      >
        <h1
          className={
            WorkSansFont.className +
            " hidden lg:block font-light text-xl scroll-down-animate"
          }
        >
          ↓ scroll down
        </h1>
        <div className="flex mx-8 gap-8">
          <JumpButton title="home" element_id="landing-page" />
          <JumpButton title="projects" element_id="projects-page" />
          <JumpButton title="artworks" element_id="artworks-page" />
          <JumpButton title="layouts" element_id="layouts-page" />
          <JumpButton title="music" element_id="music-page" />
          <button
            className={
              WorkSansFont.className +
              " hidden lg:block font-normal text-xl hover:bg-[#BE3C4D]  hover:text-white hover:px-8 transition-all delay-0 duration-500 "
            }
          >
            <Link href="web-projects">web projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeLandingPage;
