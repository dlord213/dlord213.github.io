import { Suspense, useEffect, useState } from "react";
import { photosPage } from "./MediaPageList";

export const MediaPage = () => {

  const [photoState, setPhotoState] = useState(photosPage[0]);
  const [photoOpacity, setPhotoOpacity] = useState("opacity-100")

  const buttonStyle = "xl:text-2xl duration-250 delay-0 transition-all hover:text-red-500 hover:translate-x-2"

  return (
    <>
      <div className="lg:container hidden lg:flex min-h-screen flex-row lg:p-16 md:p-8 animate-hidden justify-center duration-500 transition-all delay-0" id="songs-section">
        <div className="flex flex-col basis-[30%]">
          <h1 className="font-bold xl:text-4xl text-xl">favorite albums / singles</h1>
          <div className="flex flex-col justify-between h-full">
            <ul className="my-8">
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[0])
            }, 1500);
            }}>→ hip-hop</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[1])
            }, 1500);
            }}>→ indie</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[2])
            }, 1500);
            }}>→ rock</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[3])
            }, 1500);
            }}>→ japanese / korean</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[4])
            }, 1500);
            }}>→ pop</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[5])
            }, 1500);
            }}>→ r&b / soul</button></li>
            </ul>

            <ul>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[6])
            }, 1500);
            }}>→ radio</button></li>
            <li><button className={buttonStyle} onClick={() => {
              setPhotoOpacity("opacity-0")
              setTimeout(() => {
                setPhotoOpacity("opacity-100")
                setPhotoState(photosPage[7])
            }, 1500);
            }}>→ beats</button></li>
            </ul>
            
          </div>
          
        </div>
        <div className={"flex flex-col basis-[70%] duration-500 delay-0 transition-all " + photoOpacity}>
          {photoState}
        </div>
      </div>
    </>
  );
};
