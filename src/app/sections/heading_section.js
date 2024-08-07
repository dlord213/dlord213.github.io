export default function HeadingSection() {
  return (
    <>
      <h1 className="font-black md:text-6xl text-4xl">mirimomekiku</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4 pb-2">
          <img
            src="./assets/profile.jpg"
            className="rounded-full w-[64px] aspect-square"
          />
          <div className="">
            <p className="dark:text-slate-300 ">Jhon Lloyd Viernes</p>
            <p className="dark:text-slate-300">USTP / BSIT - 2nd Year</p>
          </div>
        </div>
      </div>
    </>
  );
}
