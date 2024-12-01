interface CardInterface {
  title: string;
  devices: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

export default function Card({
  title,
  devices,
  description,
  imageSrc,
  link,
  className,
}: CardInterface) {
  return (
    <a href={link} className="w-full">
      <div
        className={
          "flex flex-col rounded-lg lg:min-h-[15em] overflow-hidden relative transition-all delay-0 duration-500 cursor-pointer justify-center hover:shadow-[0px_0px_25px_2px_rgba(149,_157,_165,_0.2)] hover:translate-x-2 " +
          className
        }
      >
        <img
          src={imageSrc}
          className="w-full h-full absolute object-cover brightness-[0.3]"
          alt=""
        />
        <div className="flex flex-col relative p-4 text-white">
          <h1 className="font-black lg:text-6xl text-2xl ">{title}</h1>
          <div className="flex flex-col gap-2 mt-2">
            <p className="lg:text-xl md:px-2 rounded-lg text-slate-300">
              {devices}
            </p>
            <p className="text-base md:px-2 rounded-lg text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
