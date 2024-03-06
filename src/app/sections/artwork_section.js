import { ArrowUpwardRounded, ViewModuleRounded } from "@mui/icons-material";
import { combinedImgs } from "../components/listImages";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";

export default function ArtworkSection() {
  let animationFrameId;
  const [isGrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  function onMouseOutHandler() {
    const scrollSpeed = 3;
    if (currentPage == 0) {
      document.querySelector(".artwork-container").scrollLeft += scrollSpeed;
    }

    animationFrameId = requestAnimationFrame(onMouseOutHandler);
  }

  function onMouseOverHandler() {
    cancelAnimationFrame(animationFrameId);
  }

  const pages = [
    <>
      <div
        className="md:flex hidden flex-row gap-4 overflow-hidden h-[480px] artwork-container"
        onMouseOut={onMouseOutHandler}
        onMouseOver={onMouseOverHandler}
      >
        {combinedImgs.map((index) => (
          <img
            src={index.src}
            className="w-full h-full"
            alt=""
            key={index.src}
          />
        ))}
      </div>
    </>,
    <>
      <div className="md:block hidden">
        <PhotoAlbum layout="rows" photos={combinedImgs} />
      </div>
    </>,
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-end">
        <h1 className="text-2xl font-bold mt-4 md:block hidden">Artworks</h1>
        <h1 className="font-bold mt-4 md:block hidden hover-text">
          Hover to auto-scroll
        </h1>
      </div>
      {pages[currentPage]}
      <button
        className="dark:bg-[#CFF670] dark:text-[#13160E] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 w-[128px] text-center expand-button md:block hidden"
        onClick={() => {
          if (isGrid == false) {
            cancelAnimationFrame(animationFrameId);
            document.querySelector(".hover-text").style.opacity = 0;
            setCurrentPage(1);
            setIsGrid(true);
          } else {
            document.querySelector(".hover-text").style.opacity = 1;
            setCurrentPage(0);
            setIsGrid(false);
          }
        }}
      >
        {isGrid ? (
          <ArrowUpwardRounded fontSize="large" />
        ) : (
          <ViewModuleRounded fontSize="large" />
        )}
      </button>
    </>
  );
}
