import { CustomSlider } from "./Slider";


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

let artworkImages = [
  "/assets/images/designs/yoko kurama (clumpy grain)-01.jpg",
  "/assets/images/designs/ae86-01.jpg",
  "/assets/images/designs/apostles-02.jpg",
  "/assets/images/designs/blonded-01.jpg",
  "/assets/images/designs/channel orange-01.jpg",
  "/assets/images/designs/cleopatra & aphrodite-01.jpg",
  "/assets/images/designs/endless card-01.png",
  "/assets/images/designs/everlasting love-01.jpg",
  "/assets/images/designs/enough is never enough-01.png",
  "/assets/images/designs/fatal frame-01.jpg",
  "/assets/images/designs/find yourself ps2 box art back cover-01.jpg",
  "/assets/images/designs/find yourself ps2 box art-01.jpg",
  "/assets/images/designs/fucked up minds-01.jpg",
  "/assets/images/designs/fucked-up girl-01.jpg",
  "/assets/images/designs/how could i not cry-01.jpg",
  "/assets/images/designs/lost in thoughts-01.jpg",
  "/assets/images/designs/love or lust-01.jpg",
  "/assets/images/designs/mary (wicked world)-01.jpg",
  "/assets/images/designs/no one can be you except you-01.png",
  "/assets/images/designs/nobody but you-01.jpg",
  "/assets/images/designs/okinawa-01.jpg",
  "/assets/images/designs/rx-7-01.png",
  "/assets/images/designs/skyline to-01.jpg",
  "/assets/images/designs/speed 180 and 240sx-01.jpg",
  "/assets/images/designs/the morning after makes the night before seem surreal-01.jpg",
  "/assets/images/designs/the present-01.jpg",
  "/assets/images/designs/we're all horrible in our own ways-01.png",
];

let typographyImages = [
  "/assets/images/designs/typography/we'll never be those kids again-02.png",
  "/assets/images/designs/typography/feet pics mo!!!-01.png",
  "/assets/images/designs/typography/in desolation (no flower overlay)-01.png",
  "/assets/images/designs/typography/ih talaga ba (final)-01.png",
  "/assets/images/designs/typography/sawa at paalala-01.png",
  "/assets/images/designs/typography/silos na silos na ako-01.png",
  "/assets/images/designs/typography/at your best, you are love-01.jpg",
  "/assets/images/designs/typography/be you-01.png",
  "/assets/images/designs/typography/boring reality-01.png",
  "/assets/images/designs/typography/crash-01.png",
  "/assets/images/designs/typography/dissociate-01.jpg",
  "/assets/images/designs/typography/dito ka lang sa tabi ko-01.png",
  "/assets/images/designs/typography/dreamin and lovin-01.jpg",
  "/assets/images/designs/typography/eye for an eye (150 ppi)-01.png",
  "/assets/images/designs/typography/flawed-01.png",
  "/assets/images/designs/typography/good times-01.png",
  "/assets/images/designs/typography/let your thoughts roam-01.jpg",
  "/assets/images/designs/typography/lie and fallacy-01.jpg",
  "/assets/images/designs/typography/love and lust through blinding eyes-01.jpg",
  "/assets/images/designs/typography/mahal naman kita, bakit ayaw mo sakin-01.png",
  "/assets/images/designs/typography/melting me with your smile-01.jpg",
  "/assets/images/designs/typography/music makes me dismissive-01.jpg",
  "/assets/images/designs/typography/nightmare (sixth)-01.jpg",
  "/assets/images/designs/typography/preaching to someone-01.jpg",
  "/assets/images/designs/typography/revolution (love)-01.png",
  "/assets/images/designs/typography/soul tied-01.jpg",
  "/assets/images/designs/typography/sweet as sugar-01.jpg",
  "/assets/images/designs/typography/the past and present me-01.jpg",
  "/assets/images/designs/typography/this i promise you-01.jpg",
  "/assets/images/designs/typography/without art, the earth is just a rock-01.png",
];

export const SecondSectionPage = () => {
  return (
    <>
      <div
        className="lg:container hidden lg:flex flex-col h-screen w-full lg:p-16 md:p-8 animate-hidden"
        id="projects-section"
      >
        <h1 className="font-bold md:text-6xl">projects</h1>
        <p className="my-2">mostly mini-projects</p>
        <CustomSlider images={projectImages} />
      </div>
      <div
        className="lg:container hidden lg:flex flex-col h-screen w-full lg:p-16 md:p-8 animate-hidden"
        id="artworks-section"
      >
        <h1 className="font-bold md:text-6xl">artworks</h1>
        <CustomSlider images={artworkImages} type="art" />
      </div>
      <div
        className="lg:container hidden lg:flex flex-col h-screen w-full lg:p-16 md:p-8 animate-hidden"
        id="typography-section"
      >
        <h1 className="font-bold md:text-6xl">typography</h1>
        <CustomSlider images={typographyImages} type="art" />
      </div>
    </>
  );
};
