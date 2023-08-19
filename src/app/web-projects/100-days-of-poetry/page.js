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
      src: "/artwork-images/theresa pic 3-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/without art, the earth is just a rock-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/flawed-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/feet pics mo!!!-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/dito ka lang sa tabi ko-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/ae86-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/be you-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/blonded-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/boring reality-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/channel orange-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/cleopatra & aphrodite-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/crash-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/doubt-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/everlasting love-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/EXACTLY WHAT YOU RUN FROM YOU END UP CHASING-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/eye for an eye (150 ppi)-01.png",
      width: 1,
      height: 1,
    },

    {
      src: "/artwork-images/good times-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/ih talaga ba (final)-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/in desolation (no flower overlay)-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/let your thoughts roam-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/lie and fallacy-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/lost in thoughts-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/love or lust-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/mahal naman kita, bakit ayaw mo sakin-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/mary (wicked world)-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/nobody but you-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/okinawa-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/sawa at paalala-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/silos na silos na ako-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/skyline to-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/the morning after makes the night before seem surreal-01.png",
      width: 1,
      height: 1,
    },
    {
      src: "/artwork-images/we'll never be those kids again-01.png",
      width: 1,
      height: 1,
    },

    {
      src: "/artwork-images/yoko kurama (clumpy grain)-01.png",
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
    "/landscape-images/1 (2).jpg",
    "/landscape-images/1.jpg",
    "/landscape-images/2 (2).jpg",
    "/landscape-images/2.jpg",
    "/landscape-images/3.jpg",
    "/landscape-images/4.jpg",
    "/landscape-images/5.jpg",
    "/landscape-images/6.jpg",
    "/landscape-images/7.jpg",
    "/landscape-images/8.jpg",
    "/landscape-images/9.jpg",
    "/landscape-images/10.jpg",
    "/landscape-images/11.jpg",
    "/landscape-images/12.jpg",
    "/landscape-images/13.jpg",
    "/landscape-images/14.jpg",
    "/landscape-images/15.jpg",
    "/landscape-images/16.jpg",
    "/landscape-images/17.jpg",
    "/landscape-images/18.jpg",
    "/landscape-images/19.jpg",
    "/landscape-images/20 (2).jpg",
    "/landscape-images/20.jpg",
    "/landscape-images/21.jpg",
    "/landscape-images/21 (2).jpg",
    "/landscape-images/22 (2).jpg",
    "/landscape-images/22.jpg",
    "/landscape-images/23.jpg",
    "/landscape-images/27.jpg",
    "/landscape-images/28.jpg",
    "/landscape-images/29 (2).jpg",
    "/landscape-images/29.jpg",
    "/landscape-images/30.jpg",
    "/landscape-images/31.jpg",
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
