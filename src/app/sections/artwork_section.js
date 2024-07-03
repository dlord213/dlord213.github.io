import { ArrowUpwardRounded, ViewModuleRounded } from "@mui/icons-material";
import { combinedImgs } from "../components/listImages";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

export default function ArtworkSection() {
  let animationFrameId;
  const [isGrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setCurrentPage(0);
    } else {
      setCurrentPage(1);
    }
  }, []);

  function onMouseOutHandler() {
    const scrollSpeed = 3;
    const artworkContainer = document.querySelector(".artwork-container");
    if (artworkContainer && currentPage === 0) {
      artworkContainer.scrollLeft += scrollSpeed;
    }

    animationFrameId = requestAnimationFrame(onMouseOutHandler);
  }

  function onMouseOverHandler() {
    cancelAnimationFrame(animationFrameId);
  }

  const pages = [
    <>
      <div
        className="md:flex flex-row gap-4 overflow-hidden h-[480px] artwork-container hidden"
        onMouseOut={onMouseOutHandler}
        onMouseOver={onMouseOverHandler}
      >
        {combinedImgs.map((index) => (
          <img
            src={index.src}
            className="md:w-full md:h-full rounded-[1em] object-contain"
            alt=""
            key={index.src}
            loading="lazy"
          />
        ))}
      </div>
    </>,
    <>
      <div className="md:block photo-album-container">
        <PhotoAlbum
          layout="rows"
          photos={combinedImgs}
          renderPhoto={({ imageProps: { src, alt, ...restImageProps } }) => (
            <img
              className="lg:hover:scale-150 lg:hover:cursor-pointer"
              src={src}
              alt={alt}
              {...restImageProps}
            />
          )}
        />
      </div>
    </>,
  ];

  return (
    <>
      <div
        className="flex flex-row justify-between items-end"
        id="artwork-section"
      ></div>
      {pages[currentPage]}
      <button
        className="dark:bg-[#3a31d8] dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 w-[128px] text-center expand-button lg:block hidden"
        onClick={() => {
          if (isGrid == false) {
            cancelAnimationFrame(animationFrameId);
            setCurrentPage(1);
            setIsGrid(true);
          } else {
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
