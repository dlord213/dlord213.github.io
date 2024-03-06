export default function HeadingSection() {
  return (
    <>
      <h1 className="font-black md:text-6xl text-4xl">mirimomekiku</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4 pb-4">
          <img
            src="./assets/profile.jpg"
            className="rounded-full w-[64px] aspect-square"
          />
          <div className="">
            <p className="dark:text-[#D0F66F] ">Jhon Lloyd Viernes</p>
            <p>USTP / BSIT - 2nd Year</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 items-center">
          <img
            src="/assets/images/logos/ai.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/photoshop.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/tailwind.png"
            className="w-[64px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/bootstrap.png"
            className="w-[56px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/html.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/css.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/js.png"
            className="w-[48px] h-[48px] aspect-square rounded-lg"
          />
          <img
            src="/assets/images/logos/ts.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/discord.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/excel.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/mysql.png"
            className="w-[64px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/xampp.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/python.png"
            className="w-[48px] h-[48px] aspect-square"
          />
          <img
            src="/assets/images/logos/pyqt.png"
            className="w-[64px] h-[48px] aspect-square"
          />
        </div>
      </div>
    </>
  );
}
