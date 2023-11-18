import { Gallery } from "react-grid-gallery";
import "react-medium-image-zoom/dist/styles.css";
import { customImageComponent } from "../customImageComponent";
import WorkSansFont from "@/app/fonts/WorkSansFont";

export const RenderGallery = (props) => {
  const { imgList, title } = props;

  return (
    <>
      <Gallery
        images={imgList}
        margin={4}
        thumbnailImageComponent={customImageComponent}
        rowHeight={200}
      />
      <h1
        className={
          WorkSansFont.className +
          " text-[#BE3C4D] music-title-animate font-light mt-4 text-4xl lg:text-6xl"
        }
      >
        {title}
      </h1>
    </>
  );
};
