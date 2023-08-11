export const LanguagePage = () => {

  const imageStyle = "lg:w-2/5 w-2/4 transition-all md:p-0 p-2 duration-500 delay-0 hover:scale-125";

  return (
    <div className="lg:container hidden lg:flex flex-col h-screen lg:p-16 md:p-8 animate-hidden justify-center" id="languages-section">
      <h1 className="font-bold md:text-6xl text-4xl md:text-left text-center">languages / frameworks</h1>
      <div className="grid md:gap-16 grid-cols-3 grid-rows-3 md:my-16 my-8 items-center justify-center">
        <img src="/assets/logos/bootstrap.png" className={imageStyle}></img>
        <img src="/assets/logos/dart.png" className={imageStyle}></img>
        <img src="/assets/logos/flutter.png" className={imageStyle}></img>
        <img src="/assets/logos/javascript.png" className={imageStyle}></img>
        <img src="/assets/logos/kotlin.png" className={imageStyle}></img>
        <img src="/assets/logos/next.png" className={imageStyle}></img>
        <img src="/assets/logos/pyside.png" className={imageStyle}></img>
        <img src="/assets/logos/python.png" className={imageStyle}></img>
        <img src="/assets/logos/react.png" className={imageStyle}></img>
      </div>
    </div>
  );
};