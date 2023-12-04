import WorkSansFont from "@/app/fonts/WorkSansFont";


export const LanguageSection = () => {
  return (
    <div className="flex flex-col mb-4">
      <h1 className={WorkSansFont.className + " font-black text-4xl mb-2"}>
        Programming Languages /<br></br> Frameworks
      </h1>
      <div className="grid grid-cols-4 grid-rows-3 my-4 2xl:w-1/3 lg:w-1/2 gap-8 items-center">
        <img src="/assets/images/logos/python.png"></img>
        <img src="/assets/images/logos/dart.png"></img>
        <img src="/assets/images/logos/html.png"></img>
        <img src="/assets/images/logos/css.png"></img>
        <img src="/assets/images/logos/flutter.png"></img>
        <img src="/assets/images/logos/react.png"></img>
        <img src="/assets/images/logos/godot.svg"></img>
        <img src="/assets/images/logos/php.png"></img>
        <img src="/assets/images/logos/mysql.png"></img>
        <img src="/assets/images/logos/xampp.png"></img>
        <img src="/assets/images/logos/tailwind.png"></img>
        <img src="/assets/images/logos/bootstrap.png"></img>
        <img src="/assets/images/logos/js.png"></img>
        <img src="/assets/images/logos/ts.png"></img>
        <img src="/assets/images/logos/pyqt.png"></img>
      </div>
    </div>
  );
};
