"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Work_Sans, Lora } from "next/font/google";
import { useEffect, useState } from "react";
import { SplashPage } from "./splash";
import Link from "next/link";

const font = Work_Sans({
  subsets: ["latin"],
});

const bottomFont = Lora({
  subsets: ["latin"],
});

const ArtworkPage = () => {
  const artworkImages = [
    {
      src: "/assets/images/designs/theresa pic 3-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/without art, the earth is just a rock-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/flawed-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/feet pics mo!!!-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/dito ka lang sa tabi ko-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/ae86-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/be you-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/blonded-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/boring reality-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/channel orange-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/cleopatra & aphrodite-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/crash-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/eye for an eye (150 ppi)-01.png",
      width: 1,
      height: 1,
    },

    {
      src: "/assets/images/designs/typography/good times-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/ih talaga ba (final)-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/in desolation (no flower overlay)-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/let your thoughts roam-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/lie and fallacy-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/lost in thoughts-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/love or lust-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/mahal naman kita, bakit ayaw mo sakin-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/mary (wicked world)-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/nobody but you-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/okinawa-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/sawa at paalala-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/silos na silos na ako-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/skyline to-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/the morning after makes the night before seem surreal-01.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/assets/images/designs/typography/we'll never be those kids again-01.png",
      width: 1,
      height: 1,
    },

    {
      src: "/assets/images/designs/yoko kurama (clumpy grain)-01.jpg",
      width: 1,
      height: 1,
    },
  ];
  return (
    <>
      <div className="flex xl:h-[79vh] images-container">
        {artworkImages.map((src, idx) => (
          <img
            src={src.src}
            key={idx}
            className="p-4 transition-all duration-200 delay-0 hover:scale-105 -z-0 hover:bg-slate-950 hide m-8 child-image"
          ></img>
        ))}
      </div>
    </>
  );
};

const LandscapePage = () => {
  const landscapeImages = [
    "/assets/images/landscape_imgs/1 (2).jpg",
    "/assets/images/landscape_imgs/1.jpg",
    "/assets/images/landscape_imgs/2 (2).jpg",
    "/assets/images/landscape_imgs/2.jpg",
    "/assets/images/landscape_imgs/3.jpg",
    "/assets/images/landscape_imgs/4.jpg",
    "/assets/images/landscape_imgs/5.jpg",
    "/assets/images/landscape_imgs/6.jpg",
    "/assets/images/landscape_imgs/7.jpg",
    "/assets/images/landscape_imgs/8.jpg",
    "/assets/images/landscape_imgs/9.jpg",
    "/assets/images/landscape_imgs/10.jpg",
    "/assets/images/landscape_imgs/11.jpg",
    "/assets/images/landscape_imgs/12.jpg",
    "/assets/images/landscape_imgs/13.jpg",
    "/assets/images/landscape_imgs/14.jpg",
    "/assets/images/landscape_imgs/15.jpg",
    "/assets/images/landscape_imgs/16.jpg",
    "/assets/images/landscape_imgs/17.jpg",
    "/assets/images/landscape_imgs/18.jpg",
    "/assets/images/landscape_imgs/19.jpg",
    "/assets/images/landscape_imgs/20 (2).jpg",
    "/assets/images/landscape_imgs/20.jpg",
    "/assets/images/landscape_imgs/21.jpg",
    "/assets/images/landscape_imgs/21 (2).jpg",
    "/assets/images/landscape_imgs/22 (2).jpg",
    "/assets/images/landscape_imgs/22.jpg",
    "/assets/images/landscape_imgs/23.jpg",
    "/assets/images/landscape_imgs/27.jpg",
    "/assets/images/landscape_imgs/28.jpg",
    "/assets/images/landscape_imgs/29 (2).jpg",
    "/assets/images/landscape_imgs/29.jpg",
    "/assets/images/landscape_imgs/30.jpg",
    "/assets/images/landscape_imgs/31.jpg",
  ];
  return (
    <>
      <div className="flex xl:h-[79vh] images-container">
        {landscapeImages.map((src, idx) => (
          <img
            src={src}
            key={idx}
            className="p-4 transition-all duration-200 delay-0 hover:scale-105 -z-0 hover:bg-slate-950 hide m-8 object-contain child-image"
          ></img>
        ))}
      </div>
    </>
  );
};

const PoemsPage = () => {
  const poems = [
    {
      title: "Faye's Grief and Love",
      desc: "The culmination of love is grief and yet we love despite the inevitable. We open our hearts to it... To grieve deeply is to have loved fully. Open your heart to the world as you have opened it to me and you will find every reason to keep living in it.",
      author: "Faye (God of War)",
      date: "8/16/2023",
    },
    {
      title: "The Abyss",
      desc: "He who is not bold enough to be stared at from across the abyss is not bold enough to stare into it himself.",
      author: "Silent Hill 3",
      date: "8/16/2023",
    },
    {
      title: "Restless Dreams",
      desc: "In my restless dreams, I see that town... Silent Hill. You promised you'd take me there again some day... but you never did. Well, I'm alone there now, in our special place... waiting for you.",
      author: "Mary Sunderland",
      date: "8/16/2023",
    },
  ];

  return (
    <div className="flex xl:h-[79vh]">
      {poems.map((src, idx) => (
        <div
          className="flex flex-col m-4 p-4 w-[400px] justify-start"
          key={idx}
        >
          <div className="flex flex-row justify-between items-center bg-slate-900 text-white rounded-lg p-4">
            <h1 className="2xl:text-4xl text-2xl font-bold">{src.author}</h1>
            <h1>{src.date}</h1>
          </div>
          <p className="my-4 bg-slate-900 text-white rounded-lg p-4">
            {src.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

const BottomFooter = (props) => {
  const btnStyle =
    "text-md xl:text-xl border-b-2 border-black duration-500 transition-all delay-0 p-2 hover:bg-slate-950 hover:text-white";

  return (
    <>
      <ul
        className="circles -z-10 duration-[1s] delay-0 transition-opacity"
        id="dynamic-bg"
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div
        className={
          bottomFont.className +
          " text-black fixed flex flex-col justify-evenly h-[22vh] w-screen items-start mx-[3.75rem] border-t-2 border-slate-950 2xl:p-8 p-6 transition-all duration-500 delay-0"
        }
      >
        <h1 className=" 2xl:text-8xl xl:text-5xl text-3xl">{props.text}</h1>
        <ul className="flex gap-4 justify-center items-center">
          <Link href="/">
            <button className={btnStyle} onClick={() => {
              var htmlElement = document.querySelector('html')
              htmlElement.classList.remove('table')
              console.log('TABLE DISPLAY REMOVED')
            }}>Home</button>
          </Link>
          <button className={btnStyle} onClick={props.btnFunc1}>
            Artworks
          </button>
          <button className={btnStyle} onClick={props.btnFunc2}>
            Landscapes
          </button>
          <button className={btnStyle} onClick={props.btnFunc3}>
            Poems
          </button>
        </ul>
      </div>
    </>
  );
};

const SideHeader = () => {
  return (
    <div
      className={
        bottomFont.className +
        " fixed top-0 w-[60px] min-h-screen lg:flex hidden flex-col text-white bg-slate-950 justify-center items-center z-10 side-header"
      }
    >
      <h1 className="-rotate-90 text-3xl whitespace-nowrap">
        100 DAYS OF POETRY
      </h1>
    </div>
  );
};

const MobileContainer = () => {
  return (
    <div className="lg:hidden flex flex-col w-full h-screen justify-center items-center p-2">
      <h1 className="text-black font-bold text-2xl">100 DAYS OF POETRY</h1>
      <p className="text-black text-sm">
        This website is made for desktop only.
      </p>
    </div>
  );
};

const pages = [
  <>
    <ArtworkPage />
  </>,
  <>
    <LandscapePage />
  </>,
  <>
    <PoemsPage />
  </>,
];

export default function Page() {
  const [currentPageText, setCurrentPageText] = useState("100 DAYS OF POETRY");
  const [currentPage, setCurrentPage] = useState();

  const [splashState, setSplashState] = useState(0);

  useEffect(() => {
    var htmlElement = document.querySelector("html");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    setTimeout(() => {
      setSplashState(1);
    }, 10500);
    setTimeout(() => {
      htmlElement.classList.add("table");
    }, 11000);
  }, [currentPage, splashState]);

  if (splashState == 0) {
    return <SplashPage />;
  } else {
    return (
      <ReactLenis
        root
        options={{ orientation: "horizontal", gestureOrientataion: "both" }}
      >
        <div className={font.className + " bg-slate-50 "}>
          <SideHeader />
          <main className="hidden lg:flex flex-row scroll-smooth text-black mx-[5rem] transition-all duration-500 delay-0">
            {currentPage}
          </main>
          <MobileContainer />
          <BottomFooter
            text={currentPageText}
            btnFunc1={() => {
              setCurrentPage(pages[0]);
              setCurrentPageText("Artworks");
              document.getElementById("dynamic-bg").classList.add("opacity-0");
            }}
            btnFunc2={() => {
              setCurrentPage(pages[1]);
              setCurrentPageText("Landscapes");
              document.getElementById("dynamic-bg").classList.add("opacity-0");
            }}
            btnFunc3={() => {
              setCurrentPage(pages[2]);
              setCurrentPageText("Poems");
              document.getElementById("dynamic-bg").classList.add("opacity-0");
            }}
          />
        </div>
      </ReactLenis>
    );
  }
}
