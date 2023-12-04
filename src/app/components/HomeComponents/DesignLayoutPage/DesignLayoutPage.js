"use client";
import WorkSansFont from "../../../fonts/WorkSansFont";
import { customImageComponent } from "../customImageComponent";
import { Gallery } from "react-grid-gallery";

const blondeMagazines = [
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-01.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-02.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-03.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-04.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-05.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-06.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-07.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "/assets/images/magazines/blonde/blonde magazine layout-02-08.jpg",
    width: 1080,
    height: 1080,
  },
];
const hitmanMagazines = [
  {
    src: "assets/images/magazines/hitman/hitman-01.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-04.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-02.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-03.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-05.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-06.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-15.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-08.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-09.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-10.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-11.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-12.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-13.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-07.jpg",
    width: 1080,
    height: 1080,
  },

  {
    src: "assets/images/magazines/hitman/hitman-16.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-17.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-18.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-19.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-20.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/hitman/hitman-21.jpg",
    width: 1080,
    height: 1080,
  },
];
const igorMagazines = [
  {
    src: "assets/images/magazines/igor/IGOR spread page-03.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/igor/IGOR spread page-01.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/igor/IGOR spread page-02.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "assets/images/magazines/igor/IGOR spread page-03.jpg",
    width: 1080,
    height: 1080,
  },
];

export const DesignLayoutPage = () => {
  return (
    <div className="hidden lg:flex flex-col min-h-screen lg:p-0 p-4" id="layouts-page">
      <h1
        className={WorkSansFont.className + " font-bold text-6xl lg:text-8xl"}
      >
        designs
      </h1>
      <div className="my-4">
        <h1
          className={
            WorkSansFont.className + " lg:block hidden font-light text-2xl"
          }
        >
          blonde
        </h1>
        <Gallery
          images={blondeMagazines}
          margin={4}
          thumbnailImageComponent={customImageComponent}
          rowHeight={350}
        />
      </div>
      <div className="my-4">
        <h1
          className={
            WorkSansFont.className + " lg:block hidden font-light text-2xl"
          }
        >
          hitman
        </h1>
        <Gallery
          images={hitmanMagazines}
          margin={4}
          thumbnailImageComponent={customImageComponent}
          rowHeight={350}
        />
      </div>
      <div className="my-4">
        <h1
          className={
            WorkSansFont.className + " lg:block hidden font-light text-2xl"
          }
        >
          igor
        </h1>
        <Gallery
          images={igorMagazines}
          margin={4}
          thumbnailImageComponent={customImageComponent}
          rowHeight={350}
        />
      </div>
    </div>
  );
};
