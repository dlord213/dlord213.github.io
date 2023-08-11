function reply_click(id) {
  document.querySelector(`#${id}`).scrollIntoView({behavior: "instant"});
}

export const LandingPage = () => {
  const btnStyle = "xl:mr-4 mr-2 hover:text-white duration-500 text-xl hover:bg-red-500 p-1 hover:px-8";

  return (
    <div className="lg:container flex flex-col h-screen lg:p-16 md:p-8 animate-hidden justify-center" id="landing-section">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center basis-[95%]">
        <div className="flex flex-col lg:order-1 order-2 my-8 lg:my-0">
          <h1 className="md:text-6xl text-xl font-bold transition-all duration-500 delay-0 ease-in-out hover:translate-x-5 hover:text-red-500">
            mirimomekiku
          </h1>
          <p className="md:text-lg text-sm">software engineer</p>
        </div>
        <img
          src="/assets/profile.jpg"
          className="lg:w-1/5 w-1/2 rounded-full lg:hover:w-[35%] transition-all delay-0 duration-500 ease-in-out hover:brightness-125 lg:order-2"
        ></img>
      </div>
      <ul className="hidden lg:flex flex-row justify-start items-center basis-[5%]">
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("landing-section")}>home</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("projects-section")}>projects</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("artworks-section")}>artworks</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("typography-section")}>typography</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("languages-section")}>languages / frameworks</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("songs-section")}>songs</button>
        </li>
        <li className="">
          <button className={btnStyle} onClick={() => reply_click("contact-section")}>contact me</button>
        </li>
      </ul>
    </div>
  );
};
