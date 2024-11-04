"use client";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { CiGrid41 } from "react-icons/ci";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdMail } from "react-icons/md";

import { images } from "./constants/art_images";
import Card from "./components/card";
import { projects } from "./constants/projects";

export default function Home() {
  const [isGridView, setIsGridView] = useState(true);

  const [leftOpacityAnimation, leftOpacityAPI] = useSpring(() => ({
    from: { opacity: 0, x: -72 },
  }));

  const [rightOpacityAnimation, rightOpacityAPI] = useSpring(() => ({
    from: { opacity: 0, x: 72 },
  }));

  useEffect(() => {
    leftOpacityAPI.start({ opacity: 1, x: 0 });
    rightOpacityAPI.start({ opacity: 1, x: 0 });
  });

  return (
    <>
      <animated.div className="flex flex-col  md:flex md:flex-row 2xl:mx-[15vw] xl:mx-[10vw] mt-16 mb-4 lg:mx-[5vw] md:mx-[5vw] mx-[5vw] font-[family-name:var(--font-geist-sans)] lg:gap-36 gap-8 ">
        <animated.section
          className="sticky basis-[30%]"
          style={leftOpacityAnimation}
        >
          <animated.div className="sticky 2xl:min-h-[95vh] xl:min-h-[94vh] lg:min-h-[94vh] flex flex-col justify-between top-8 left-4">
            <animated.div className="flex flex-col 2xl:gap-8 gap-4">
              <img
                src="assets/profile.jpeg "
                className="aspect-square object-cover rounded-full  transition-all delay-0 duration-200 hover:scale-110 hover:shadow-[0px_0px_25px_2px_rgba(149,_157,_165,_0.2)]"
              />
              <animated.div className="sticky flex flex-col gap-4">
                <animated.div>
                  <h1 className="font-bold xl:text-4xl lg:text-2xl mb-1">
                    Jhon Lloyd Viernes
                  </h1>
                  <div className="flex flex-row gap-3 items-center">
                    <IoLocation size={20} />
                    <p className="text-gray-400">Cagayan de Oro, Philippines</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <MdMail size={20} />
                    <a
                      href="mailto:viernes.jhonlloydd@gmail.com"
                      className="text-gray-400 delay-0 duration-300 hover:text-rose-500 transition-all underline"
                    >
                      viernes.jhonlloydd@gmail.com
                    </a>
                  </div>
                </animated.div>

                <p>
                  I&apos;m a graphic designer & developer primarily focused on
                  React/Next.JS. Interested on developing high-quality yet
                  maintainable applications.
                </p>
              </animated.div>
              <animated.div className="hidden md:flex flex-col gap-2 ">
                <a
                  href="#"
                  className="text-rose-500 transition-all delay-0 duration-300 hover:text-rose-400 hover:font-bold"
                >
                  Technologies
                </a>
                <a
                  href="#projects"
                  className="text-rose-500 transition-all delay-0 duration-300 hover:text-rose-400 hover:font-bold"
                >
                  Projects
                </a>
                <a
                  href="#design"
                  className="text-rose-500 transition-all delay-0 duration-300 hover:text-rose-400 hover:font-bold hidden"
                >
                  Graphic Design
                </a>
                <a
                  href="#art"
                  className="text-rose-500 transition-all delay-0 duration-300 hover:text-rose-400 hover:font-bold"
                >
                  Art
                </a>
                <a
                  href="#music"
                  className="text-rose-500 transition-all delay-0 duration-300 hover:text-rose-400 hover:font-bold"
                >
                  Music
                </a>
              </animated.div>
            </animated.div>
            <animated.div className="flex flex-col gap-3">
              <animated.div className="hidden lg:flex xl:hidden 2xl:flex flex-row gap-4">
                <a href="https://web.facebook.com/mirimomekiku">
                  <FaFacebookSquare
                    size={32}
                    className="delay-0 duration-300 transition-all hover:text-rose-500 hover:scale-105 hover:translate-y-1"
                  />
                </a>
                <a href="https://www.instagram.com/mirimomekiku/">
                  <FaInstagram
                    size={32}
                    className="delay-0 duration-300 transition-all hover:text-rose-500 hover:scale-105 hover:translate-y-1"
                  />
                </a>
                <a href="https://github.com/dlord213/">
                  <FaGithub
                    size={32}
                    className="delay-0 duration-300 transition-all hover:text-rose-500 hover:scale-105 hover:translate-y-1"
                  />
                </a>
                <a href="https://soundcloud.com/mirimomekiku">
                  <FaSoundcloud
                    size={32}
                    className="delay-0 duration-300 transition-all hover:text-rose-500 hover:scale-105 hover:translate-y-1"
                  />
                </a>
              </animated.div>
              <p className="text-sm 2xl:flex hidden">
                Designed in Figma and coded in Visual Studio Code by yours
                truly. Built with Next.js and Tailwind CSS.
              </p>
            </animated.div>
          </animated.div>
        </animated.section>
        <animated.div
          className="flex flex-col gap-8 basis-[70%]"
          style={rightOpacityAnimation}
        >
          <p className="md:block hidden text-lg">
            Back then in my childhood, I was always interested on computers and
            how things worked behind the scenes. I was simply fascinated how a
            mere screen can display many informations and how you can connect to
            others with just a few click. I&apos;ve started coding in BATCH &
            tried modding on games such as Grand Theft Auto series and made my
            first mod that can teleport to any location available. I&apos;ve
            always been interested on modding consoles too and built a AOSP rom
            on my Galaxy Grand Prime phone in high school to satiate my
            curiosity.
            <br></br>
            <br></br>
            My main focus is to build a accessible user interfaces and enjoy on
            building software.
            <b>
              {" "}
              I like doing software where there&apos;s design & coding + a bit
              of back-end stuff.
            </b>{" "}
            <br></br>
            <br></br>In my free time, I also do fun side-project that&apos;ll
            let me learn new things but also play games and enjoy some music.
          </p>
          <animated.section className="flex flex-col gap-6" id="tech">
            <h1 className="xl:text-4xl lg:text-2xl font-bold">Technologies</h1>
            <animated.div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-300 dark:opacity-50">
                Backend
              </h3>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-white/50 dark:bg-[#ffffff14]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      version="1.1"
                      preserveAspectRatio="xMidYMid"
                      className="flex-shrink-0 h-5 w-5 fill-black/75 dark:fill-slate-200"
                    >
                      <g>
                        <path
                          d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">NextJS</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#6fa66026]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#6FA660"
                      viewBox="0 0 512 512"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"></path>{" "}
                      <path d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">Node</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#8b5cf626]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <g clipPath="url(#prefix__clip0)" fill="#8B5CF6">
                        <path d="M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015"></path>
                      </g>
                      <defs>
                        <clipPath id="prefix__clip0">
                          <path
                            fill="#fff"
                            transform="translate(1.125 4.875)"
                            d="M0 0h21.813v14.291H0z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">PHP</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#6e97fe26]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          gradientUnits="userSpaceOnUse"
                          x1="-0.008"
                          y1="0.077"
                          x2="0.576"
                          y2="0.784"
                          gradientTransform="matrix(19.58203 0 0 17.23828 .21 2.313)"
                        >
                          <stop
                            offset="0"
                            stopColor="#41d1ff"
                            stopOpacity={1}
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#bd34fe"
                            stopOpacity={1}
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="b"
                          gradientUnits="userSpaceOnUse"
                          x1="0.434"
                          y1="0.022"
                          x2="0.503"
                          y2="0.89"
                          gradientTransform="matrix(9.01172 0 0 16.29297 6.945 .148)"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffea83"
                            stopOpacity={1}
                          ></stop>
                          <stop
                            offset="0.083"
                            stopColor="#ffdd35"
                            stopOpacity={1}
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#ffa800"
                            stopOpacity={1}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        stroke="none"
                        fillRule="nonzero"
                        fill="url(#a)"
                        d="m19.793 3.055-9.262 16.492a.504.504 0 0 1-.875.004L.211 3.055a.502.502 0 0 1 .527-.743l9.27 1.653a.555.555 0 0 0 .18-.004l9.074-1.645a.503.503 0 0 1 .531.739Zm0 0"
                      ></path>
                      <path
                        stroke="none"
                        fillRule="nonzero"
                        fill="url(#b)"
                        d="M14.422.148 7.57 1.484a.253.253 0 0 0-.203.23L6.945 8.81a.25.25 0 0 0 .09.207c.059.05.14.07.219.05L9.16 8.63a.25.25 0 0 1 .305.293l-.567 2.765a.25.25 0 0 0 .32.29l1.177-.356a.251.251 0 0 1 .32.29l-.899 4.343c-.058.273.305.418.457.187l.102-.156 5.582-11.101a.25.25 0 0 0-.273-.356l-1.961.375a.247.247 0 0 1-.29-.312L14.716.465a.252.252 0 0 0-.293-.317Zm0 0"
                      ></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">Vite</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="https://cdn.icon-icons.com/icons2/3914/PNG/512/pocketbase_logo_icon_248816.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">PocketBase</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" />
                  </animated.div>
                  <span className="text-smaller md:text-small">MySQL</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/supabase.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Supabase</span>
                </li>
              </ul>
            </animated.div>
            <animated.div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-300 dark:opacity-50">
                Frontend
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-x-2 gap-y-2">
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#7ee1fc26]">
                    <svg
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <g fill="#61DAFB" width="25" height="25">
                        <path d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"></path>
                        <path d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"></path>
                      </g>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">React</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#007acc26]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path d="M0 0h24v24H0V0z" fill="#fff"></path>
                      <path
                        d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z"
                        fill="#007ACC"
                      ></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">Typescript</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#f0db4f26]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                    >
                      <g id="surface1">
                        <rect
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          fill="rgb(94.117647%,85.882353%,30.980392%)"
                          fillOpacity={1}
                          stroke="none"
                        ></rect>
                        <path
                          fill="rgb(19.607843%,20%,18.823529%)"
                          fillOpacity={1}
                          stroke="none"
                          fillRule="nonzero"
                          d="M 18.363281 15.230469 C 18.214844 14.316406 17.621094 13.550781 15.859375 12.835938 C 15.246094 12.554688 14.566406 12.355469 14.359375 11.890625 C 14.289062 11.621094 14.28125 11.46875 14.324219 11.304688 C 14.457031 10.773438 15.089844 10.609375 15.589844 10.761719 C 15.914062 10.867188 16.21875 11.117188 16.40625 11.515625 C 17.269531 10.957031 17.265625 10.960938 17.867188 10.574219 C 17.648438 10.234375 17.53125 10.074219 17.386719 9.929688 C 16.867188 9.351562 16.160156 9.050781 15.027344 9.074219 C 14.832031 9.097656 14.636719 9.125 14.4375 9.148438 C 13.875 9.292969 13.335938 9.589844 13.019531 9.988281 C 12.074219 11.0625 12.34375 12.941406 13.496094 13.714844 C 14.632812 14.566406 16.296875 14.761719 16.511719 15.558594 C 16.71875 16.53125 15.792969 16.847656 14.875 16.734375 C 14.199219 16.59375 13.824219 16.25 13.417969 15.625 C 12.667969 16.058594 12.667969 16.058594 11.898438 16.5 C 12.078125 16.902344 12.273438 17.082031 12.578125 17.429688 C 14.027344 18.898438 17.652344 18.824219 18.300781 16.601562 C 18.328125 16.523438 18.503906 16.015625 18.363281 15.230469 Z M 10.871094 9.191406 L 9 9.191406 C 9 10.808594 8.996094 12.414062 8.996094 14.027344 C 8.996094 15.058594 9.046875 16 8.878906 16.289062 C 8.605469 16.855469 7.898438 16.785156 7.574219 16.675781 C 7.246094 16.515625 7.078125 16.285156 6.882812 15.960938 C 6.832031 15.867188 6.789062 15.792969 6.777344 15.789062 C 6.269531 16.097656 5.765625 16.410156 5.257812 16.71875 C 5.507812 17.238281 5.882812 17.691406 6.359375 17.984375 C 7.070312 18.410156 8.03125 18.542969 9.03125 18.3125 C 9.683594 18.121094 10.246094 17.726562 10.542969 17.128906 C 10.96875 16.34375 10.875 15.394531 10.871094 14.34375 C 10.882812 12.628906 10.871094 10.914062 10.871094 9.191406 Z M 10.871094 9.191406 "
                        ></path>
                      </g>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">Javascript</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#44a8b326]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.
                  189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
                        fill="url(#prefix__paint0_linear)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="prefix__paint0_linear"
                          x1=".667"
                          y1="-6.689"
                          x2="23.333"
                          y2="31.089"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2383AE"></stop>
                          <stop offset="1" stopColor="#6DD7B9"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">
                    Tailwind CSS
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#cf649a26]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#cf649a"
                      className="ionicon flex-shrink-0 h-5 w-5"
                    >
                      <path d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z"></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">SASS</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#dd4b2526]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#dd4b25"
                      className="flex-shrink-0 h-5 w-5"
                    >
                      <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">HTML</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[#264de426]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="#264de4"
                        d="m18.824 0-1.61 17.996L9.997 20l-7.203-2L1.187 0Zm0 0"
                      ></path>
                      <path
                        fill="#ebebeb"
                        d="M10.004 8.148H4.867l.2 2.207h4.937ZM10.004 3.68H4.469l.199 2.207h5.336ZM5.164 11.46l.309 3.466 4.523 1.254h.008v-2.297h-.008l-2.46-.664-.157-1.758Zm0 0"
                      ></path>
                      <path
                        fill="#fff"
                        d="m12.715 10.355-.254 2.864-2.465.664v2.297l4.527-1.254.032-.371.52-5.813.054-.594.398-4.468h-5.53v2.207h3.112l-.203 2.261h-2.91v2.207Zm0 0"
                      ></path>
                    </svg>
                  </animated.div>
                  <span className="text-smaller md:text-small">CSS</span>
                </li>
              </ul>
            </animated.div>
            <animated.div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-300 dark:opacity-50">
                Applications
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-2">
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/android_studio.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">
                    Android Studio
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/blender.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Blender</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/excel.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Excel</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/github.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Git/GitHub</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/photoshop.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">
                    Adobe Photoshop
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="/assets/logos/vscode.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">VSCode</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Canva</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px] ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" />
                  </animated.div>
                  <span className="text-smaller md:text-small">Figma</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="https://www.svgrepo.com/show/306627/qt.svg" />
                  </animated.div>
                  <span className="text-smaller md:text-small">
                    Qt Designer
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <animated.div className="p-2 items-center justify-center rounded-lg bg-[white] max-w-[36px]">
                    <img src="./assets/logos/fl studio.webp" />
                  </animated.div>
                  <span className="text-smaller md:text-small">FL Studio</span>
                </li>
              </ul>
            </animated.div>
            <animated.div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-300 dark:opacity-50">
                Other Libraries/Frameworks
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-2">
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">Zustand</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">
                    Tanstack Query
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">Expo</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">ShadCN UI</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">
                    React Native Paper
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">Sonner</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">
                    React Router
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">
                    Styled Components
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">
                    Material UI
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">Formik</span>
                </li>
                <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
                  <span className="text-smaller md:text-small">Axios</span>
                </li>
              </ul>
            </animated.div>
          </animated.section>
          <animated.section
            className="hidden lg:flex flex-col gap-6"
            id="projects"
          >
            <h1 className="xl:text-4xl lg:text-2xl font-bold">Projects</h1>
            <animated.div className="flex flex-col gap-4">
              {projects.map((item) => (
                <Card
                  title={item.title}
                  devices={item.devices}
                  description={item.description}
                  imageSrc={item.imageSrc}
                  link={item.link}
                  key={item.link}
                />
              ))}
            </animated.div>
          </animated.section>
          <animated.section className="hidden lg:flex flex-col gap-6" id="art">
            <animated.div className="flex flex-row justify-between items-center">
              <h1 className="xl:text-4xl lg:text-2xl font-bold">Art</h1>
              {isGridView ? (
                <LuGalleryHorizontalEnd
                  size={32}
                  onClick={() => setIsGridView((prevVal) => !prevVal)}
                  className="animate-pulse hidden"
                />
              ) : (
                <CiGrid41
                  size={32}
                  onClick={() => setIsGridView((prevVal) => !prevVal)}
                  className="animate-pulse hidden"
                />
              )}
            </animated.div>
            {isGridView ? (
              <animated.div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-2 photo-album-container">
                {images.map((item) => (
                  <animated.div className="max-w-[480px]" key={item.src}>
                    <img
                      src={item.src}
                      className="w-full rounded-md transition-all delay-0 duration-300 react-photo-album--photo"
                      loading="lazy"
                    />
                  </animated.div>
                ))}
              </animated.div>
            ) : (
              <Marquee pauseOnClick pauseOnHover className="max-w-[70%]">
                {images.map((item) => (
                  <animated.div className="max-w-[240px] mx-2" key={item.src}>
                    <img src={item.src} className="w-full rounded-md" />
                  </animated.div>
                ))}
              </Marquee>
            )}
          </animated.section>
          <animated.section
            className="hidden lg:flex flex-col gap-6"
            id="music"
          >
            <h1 className="xl:text-4xl lg:text-2xl font-bold">Music</h1>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1852158159&color=%23f0dceb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1653426820&color=%23f0dceb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </animated.section>
        </animated.div>
      </animated.div>
    </>
  );
}
