import WorkSansFont from "@/app/fonts/WorkSansFont";
import { useState } from "react";
import {
  hiphopImgs,
  indieImgs,
  indieRockImgs,
  jpKrImgs,
  popImgs,
  rnbSoulImgs,
} from "./albumsImgList";
import { RenderGallery } from "./RenderGallery";

const Button = (props) => {
  const { title, onClick } = props;

  return (
    <button
      className={
        WorkSansFont.className +
        " hidden lg:block font-normal text-xl hover:bg-[#BE3C4D]  hover:text-white hover:px-8 transition-all delay-0 duration-500 "
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const MusicPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <>
      <RenderGallery imgList={hiphopImgs} title="hip-hop" />
    </>,
    <>
      <RenderGallery imgList={indieImgs} title="indie" />
    </>,
    <>
      <RenderGallery imgList={indieRockImgs} title="rock" />
    </>,
    <>
      <RenderGallery imgList={jpKrImgs} title="japanese/korean" />
    </>,
    <>
      <RenderGallery imgList={popImgs} title="pop" />
    </>,
    <>
      <RenderGallery imgList={rnbSoulImgs} title="r&b/soul" />
    </>,
  ];

  return (
    <div
      className="hidden lg:flex flex-col min-h-screen lg:p-0 p-4 justify-around"
      id="music-page"
    >
      <div
        className="transition-all duration-500 delay-0 ease-in-out"
        id="music-display-section"
      >
        <h1
          className={WorkSansFont.className + " font-bold text-6xl lg:text-8xl"}
        >
          music
        </h1>
        {pages[currentPage]}
      </div>
      <div className="relative bottom-0 mt-4 flex flex-row gap-4">
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(0);
            }, 1000);
          }}
          title="hip-hop"
        />
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(1);
            }, 1000);
          }}
          title="indie"
        />
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(2);
            }, 1000);
          }}
          title="rock"
        />
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(3);
            }, 1000);
          }}
          title="japanese/korean"
        />
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(4);
            }, 1000);
          }}
          title="pop"
        />
        <Button
          onClick={() => {
            const element = document.getElementById("music-display-section");
            element.style.opacity = 0;
            setTimeout(() => {
              element.style.opacity = 1;
              setCurrentPage(5);
            }, 1000);
          }}
          title="r&b/soul"
        />
      </div>
    </div>
  );
};
