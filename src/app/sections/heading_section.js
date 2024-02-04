export default function HeadingSection() {
  return (
    <>
      <h1 className="font-black md:text-6xl text-4xl">mirimomekiku</h1>
      <div className="flex flex-row items-center gap-4 pb-4">
        <img src="./assets/profile.jpg" className="rounded-full w-[64px]" />
        <div className="">
          <p className="dark:text-[#D0F66F] ">Jhon Lloyd Viernes</p>
          <p>USTP / BSIT - 2nd Year</p>
        </div>
      </div>
    </>
  );
}
