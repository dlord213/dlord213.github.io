"use client";

import { HexColorPicker } from "react-colorful";
import { useState, useEffect } from "react";
import "./styles.css";
import Link from "next/link";

export default function Page() {
  const [firstColor, setFirstColor] = useState("#37d67a");
  const [secondColor, setSecondColor] = useState("#ff34f1");
  const [gradientDirection, setGradientDirection] = useState("to bottom");

  var bgGradient = `linear-gradient(${gradientDirection}, ${firstColor}, ${secondColor})`;
  var btnStyle =
    "p-2 text-white bg-red-500 rounded-md mx-2 transition-all duration-500 delay-0 hover:bg-slate-950";

  useEffect(() => {
    var bodyBg = document.getElementById("main-container");
    bodyBg.style.background = bgGradient;

    console.log(bgGradient);
  }, [bgGradient]);

  return (
    <>
      <button className="absolute top-20 left-40 bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0">
        <Link href="/web-projects">← Web Projects</Link>
      </button>
      <div
        className="flex flex-col justify-center items-center h-screen"
        id="main-container"
      >
        <div className="flex flex-col justify-center items-center text-left">
          <h1 className="text-4xl font-bold my-4 text-white">
            Gradient Generator
          </h1>
          <div className="flex flex-row">
            <HexColorPicker color={firstColor} onChange={setFirstColor} />
            <HexColorPicker color={secondColor} onChange={setSecondColor} />
          </div>
          <div className="flex flex-row my-2 p-2 ">
            <button
              className={btnStyle}
              onClick={() => setGradientDirection("to left")}
            >
              to left
            </button>
            <button
              className={btnStyle}
              onClick={() => setGradientDirection("to right")}
            >
              to right
            </button>
            <button
              className={btnStyle}
              onClick={() => setGradientDirection("to bottom")}
            >
              to bottom
            </button>
            <button
              className={btnStyle}
              onClick={() => setGradientDirection("to top")}
            >
              to top
            </button>
          </div>
          <div className="flex flex-row my-4 h-[40px] rounded-md justify-between items-center bg-slate-950 text-white p-4">
            <p>{bgGradient}</p>
            <button className="ml-8 text-red-500">Copy</button>
          </div>
        </div>
      </div>
    </>
  );
}
