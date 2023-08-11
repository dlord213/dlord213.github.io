"use client";

import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const CustomSlider = (props) => {
  let images = props.images;

  const [opacities, setOpacities] = useState([]);
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        number: images.length,
      },
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  if (props.type == "art") {
    return (
      <>
        <div ref={sliderRef} className="h-full relative overflow-hidden my-8 lg:my-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center absolute top-0 w-full"
              style={{ opacity: opacities[idx] }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={src}
                  className="bg-transparent object-scale-down w-1/2"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div ref={sliderRef} className="h-full relative overflow-hidden my-8 lg:my-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-full h-full absolute top-0"
              style={{ opacity: opacities[idx] }}
            >
              <div className="flex flex-col p-4 w-1/2">
                <h1 className="font-bold">{src.title}</h1>
                <p className={props.descTheme}>{src.desc}</p>
              </div>
              <div className="w-full">
                <img
                  src={src.img}
                  className="bg-transparent w-full h-full object-scale-down"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
