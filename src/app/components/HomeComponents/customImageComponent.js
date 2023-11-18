import Zoom from "react-medium-image-zoom";
import gsap from "gsap";

export const customImageComponent = (props) => {
  const handleClick = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  const onEnter = (e) => {
    gsap.to(e.target, { scale: 1.1 });
  };

  const onLeave = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  return (
    <Zoom zoomMargin={15} classDialog="custom-zoom-modal">
      <img
        {...props.imageProps}
        loading="lazy"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleClick}
      />
    </Zoom>
  );
};
