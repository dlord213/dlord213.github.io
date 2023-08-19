"use client";
import { Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import "./poetry_style.css";

const mainFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const SplashPage = () => {
  const textStyle =
    "absolute text-center select-none font-bold text-4xl xl:text-8xl";

  useEffect(() => {
    const texts = [
      "",
      "this website is for my thoughts.",
      "we suffer more in our mind than in reality.",
      "live like there's no tomorrow.",
      "100 DAYS OF POETRY",
    ];

    const morphTime = 1;
    const cooldownTime = 1;

    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let textIndex = texts.length - 1;

    const elts = {
      text1: document.getElementById("text-1"),
      text2: document.getElementById("text-2"),
    };

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    animate();

    var splash = document.getElementById("splash-page");
    var text_1 = document.getElementById("text-1");
    var text_2 = document.getElementById("text-2");

    setTimeout(() => {
      splash.style.opacity = 0;
      text_1.classList.add("scale-150");
      text_2.classList.add("scale-150");
    }, 9000);

    setTimeout(() => {
      splash.classList.add("hidden");
    }, 10000);
  }, []);

  return (
    <>
      <div
        className={
          mainFont.className +
          " flex h-[80vh] text-black justify-center items-center transition-all duration-500 delay-0"
        }
        id="splash-page"
      >
        <span id="text-1" className={textStyle}></span>
        <span id="text-2" className={textStyle}></span>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 1 0 0
                  1 1 1 0 0
                  1 0 1 0 0
                  0 1 0 255 -125"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
