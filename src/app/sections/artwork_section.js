import { ArrowUpwardRounded, ViewModuleRounded } from "@mui/icons-material";
import { combinedImgs } from "../components/listImages";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Marquee from "react-fast-marquee";

export default function ArtworkSection() {
  const [isGrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setCurrentPage(0);
    } else {
      setCurrentPage(1);
    }
  }, []);

  const pages = [
    <>
      <Marquee
        speed={200}
        pauseOnHover={true}
        delay={3}
        style={{ maxHeight: 480 }}
      >
        {combinedImgs.map((img) => (
          <img
            src={img.src}
            className="rounded-[1em] object-contain mx-2 max-w-[480px] max-h-[480px]"
            alt=""
            key={img.src}
          />
        ))}
      </Marquee>
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
        className="flex flex-row justify-between items-end relative"
        id="artwork-section"
      ></div>
      {pages[currentPage]}
      <button
        className="sticky z-50 bottom-8 dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 w-[128px] text-center expand-button lg:block hidden self-end"
        onClick={() => {
          setCurrentPage(isGrid ? 0 : 1);
          setIsGrid((prevIsGrid) => !prevIsGrid);
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
