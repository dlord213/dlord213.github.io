import {
  DashboardRounded,
  HomeRounded,
  LightModeRounded,
  WebAssetRounded,
  MusicNoteRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { systemTheme, theme, setTheme } = useTheme();

  function onMouseOverHandler() {
    let textTags = document.querySelectorAll(".nav-h1");
    let sidebarTag = document.querySelector(".nav-sidebar");

    if (screen.width > 1280) {
      textTags.forEach((elem) => {
        elem.classList.remove("opacity-0");
        elem.classList.add("opacity-100");
      });

      sidebarTag.classList.remove("max-w-[64px]");
      sidebarTag.classList.add("max-w-[240px]");
    }
  }

  function onMouseLeaveHandler() {
    let textTags = document.querySelectorAll(".nav-h1");
    let sidebarTag = document.querySelector(".nav-sidebar");

    if (screen.width > 1280) {
      textTags.forEach((elem) => {
        elem.classList.remove("opacity-100");
        elem.classList.add("opacity-0");
      });

      sidebarTag.classList.remove("max-w-[240px]");
      sidebarTag.classList.add("max-w-[64px]");
    }
  }

  return (
    <div
      className="float-left fixed 2xl:left-[9.5rem] xl:left-[5.5rem] left-0 top-0 hidden md:flex flex-col justify-center items-start m-4 bg-[#11130C] text-[#EEF1E9] dark:bg-indigo-600 dark:text-[#eae9fc] p-4 rounded-lg gap-2 nav-sidebar max-w-[64px] transition-all duration-500 delay-0 xl:hover:-translate-x-16 z-10"
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Link href="/" className="hidden">
        <div className="flex flex-row gap-2 justify-center items-center">
          <HomeRounded fontSize="large" />
          <h1 className="font-bold nav-h1 opacity-0 transition-all duration-500 delay-0">
            Home
          </h1>
        </div>
      </Link>
      <Link href="#projects-section" className="hidden">
        <div className="flex flex-row gap-2 justify-center items-center">
          <DashboardRounded fontSize="large" />
          <h1 className="font-bold nav-h1 opacity-0 transition-all duration-500 delay-0">
            Projects
          </h1>
        </div>
      </Link>
      <Link href="#artwork-section" className="hidden">
        <div className="flex flex-row gap-2 justify-center items-center">
          <WebAssetRounded fontSize="large" />
          <h1 className="font-bold nav-h1 opacity-0 transition-all duration-500 delay-0">
            Artworks
          </h1>
        </div>
      </Link>
      <Link href="#music-section" className="hidden">
        <div className="flex flex-row gap-2 justify-center items-center">
          <MusicNoteRounded fontSize="large" />
          <h1 className="font-bold nav-h1 opacity-0 transition-all duration-500 delay-0">
            Music
          </h1>
        </div>
      </Link>
      <div
        className="flex flex-row gap-2 justify-center items-center cursor-pointer"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <LightModeRounded fontSize="large" />
        <h1 className="font-bold nav-h1 opacity-0 transition-all duration-500 delay-0">
          Theme
        </h1>
      </div>
    </div>
  );
}
