import { Carousel } from "react-responsive-carousel";

let projectImages = [
  {
    img: "/assets/images/projects/card_checker.png",
    title: "Card Checker",
    desc: "An app that'll check whether the entered card number is valid or invalid using the Luhn algorithm and checks your card brand, made on Python using PySide6.",
  },
  {
    img: "/assets/images/projects/document_converter_5_1.png",
    title: "Document Converter",
    desc: "An app that'll convert your PDF to DOCX and vice versa, made on Python and uses PySide6.",
  },
  {
    img: "/assets/images/projects/lib_system.png",
    title: "Lib-System",
    desc: "A simple library book information that displays a book list and can also add/remove book in the list.",
  },
  {
    img: "/assets/images/projects/miri's_library.png",
    title: "MIRI'S LIBRARY",
    desc: "A simple book management system that includes adding/removing and viewing books.",
  },
  {
    img: "/assets/images/projects/password_generator.png",
    title: "PassGen",
    desc: "A simple app that uses secrets module to generate a password with basic level of security.",
  },
  {
    img: "/assets/images/projects/persona_3_1.png",
    title: "P3FES Skill Editor",
    desc: "A party editor skill app that automatically converts it onto a usable .PNACH file for PCSX2 and is made on Python and uses PySide6 module, for those who play Persona 3!",
  },
  {
    img: "/assets/images/projects/persona_4_guide.png",
    title: "Persona 4 Golden Guide App",
    desc: "A guide app for Persona 4 Golden.",
  },
  {
    img: "/assets/images/projects/persona_5_1.png",
    title: "Persona 5 Wiki App",
    desc: "A simple wiki app made on Python and uses PySide6 module, for those who play Persona 5! Made it for fun due to my love for the game, it contains informations for each bosses, dungeons and many more!",
  },
  {
    img: "/assets/images/projects/png_to_jpg.png",
    title: "PNG to JPG",
    desc: "An app that'll convert a PNG format to JPG, made on Python and uses PySide6 and PILLOW.",
  },
  {
    img: "/assets/images/projects/system_z_1.png",
    title: "SYSTEM-Z",
    desc: "An app that'll get your system information such as IP address, GPU/CPU info and many more. Made on Python.",
  },
  {
    img: "/assets/images/projects/tekken-01.png",
    title: "TEK-WIKI",
    desc: "An offline mobile wiki app for Android, it's for those who play the TEKKEN game series. It contains information about each games and each characters, planning to include a move list for each character on every games with frame datas! Made using Flutter and uses pubs.",
  },
  {
    img: "/assets/images/projects/the_fox_run.png",
    title: "The Fox Run",
    desc: "An game that features a fox roaming around the jungle to collectkeys/coins and discover other undiscovered areas, made on GoDot game engine.",
  },
  {
    img: "/assets/images/projects/windows_key_generator.png",
    title: "Windows Key Generator",
    desc: "An app that can generate keys for Windows 95 (OEM/Retail).",
  },
];

const ProjectsPage = () => {
  return (
    <div
      className="lg:container hidden lg:flex justify-center flex-col w-full lg:p-16 md:p-8 animate-hidden z-10"
      id="projects-section"
    >
      <h1 className="font-bold md:text-6xl">projects</h1>
      <p className="my-2">mostly mini-projects </p>
      <Carousel
        className=""
        dynamicHeight={true}
        infiniteLoop={true}
        autoPlay={false}
        showStatus={true}
        showThumbs={false}
        showIndicators={false}
        swipeable={true}
        emulateTouch={true}
      >
        {projectImages.map((src, idx) => (
          <div
            className="flex flex-row items-center justify-start min-w-full text-left"
            key={idx}
          >
            <div className="flex flex-col p-4 w-1/2">
              <h1 className="font-bold">{src.title}</h1>
              <p className="">{src.desc}</p>
            </div>
            <div className="w-1/2">
              <img src={src.img} className="bg-transparent object-fit"></img>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsPage;
