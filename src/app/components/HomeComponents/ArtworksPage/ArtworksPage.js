import { Gallery } from "react-grid-gallery";
import "react-medium-image-zoom/dist/styles.css";
import { customImageComponent } from "../customImageComponent";
import { combinedImgs } from "./listImages";
import WorkSansFont from "@/app/fonts/WorkSansFont";

const ArtworksPage = () => {
  return (
    <div className="hidden lg:flex flex-col min-h-screen " id="artworks-page">
      <h1 className={WorkSansFont.className + " font-bold text-8xl"}>
        artworks
      </h1>
      <div className="my-4">
        <Gallery
          images={combinedImgs}
          margin={4}
          thumbnailImageComponent={customImageComponent}
          rowHeight={350}
        />
      </div>
    </div>
  );
};

export default ArtworksPage;
