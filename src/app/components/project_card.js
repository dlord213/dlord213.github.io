import Link from "next/link";
export default function RenderProjectCard(props) {
  const { title, devices, description, imageSrc, link, style } = props;

  return (
    <Link href={link} className="w-full">
      <div
        className={
          "flex flex-col rounded-lg md:min-h-[15em] overflow-hidden relative shadow-inner hover:translate-y-1 border-b-8 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 transition-all delay-0 duration-500 cursor-pointer justify-center border-b-[#0b0a10] dark:border-b-[#F1F3EC] " +
          style
        }
      >
        <img
          src={imageSrc}
          className="w-full h-full absolute object-cover brightness-[0.3]"
          alt=""
        />
        <div className="flex flex-col relative p-4 text-white">
          <h1 className="font-black md:text-6xl text-2xl ">{title}</h1>
          <div className="flex flex-col gap-2 mt-2">
            <p className="md:text-xl md:px-2 rounded-lg text-slate-300">
              {devices}
            </p>
            <p className="text-base md:px-2 rounded-lg text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
