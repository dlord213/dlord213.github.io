import IBM_Plex_MonoFont from "@/app/fonts/IBM_Plex_MonoFont";
import WorkSansFont from "@/app/fonts/WorkSansFont";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center">
          <img
            src="/assets/images/profile.jpg"
            className="lg:w-[120px] lg:p-0 p-4 aspect-square rounded-full"
          ></img>
        </div>
        <p
          className={
            WorkSansFont.className + " font-light p-4 lg:w-1/2 2xl:w-1/4"
          }
        >
          I&apos;m <b>Jhon Lloyd Viernes</b>, a student currently studying at
          USTP in Cagayan de Oro. I am <b>focused on front-end development</b>{" "}
          and is currently studying back-end development.
        </p>
      </div>
      <div className="hidden lg:flex flex-col items-end justify-between">
        <div className="flex flex-col items-end">
          <h1 className={IBM_Plex_MonoFont.className + " text-4xl font-bold"}>
            mirimomekiku
          </h1>
          <p className={WorkSansFont.className + " font-light"}>student</p>
        </div>
        <button className={WorkSansFont.className + " hidden font-normal transition-all delay-0 duration-500 hover:text-[#BE3C4D]"}>
          <Link href="/assets/resume.pdf">view resume</Link>
        </button>
      </div>
    </div>
  );
};
