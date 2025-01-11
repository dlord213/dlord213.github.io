interface ProjectInterface {
  title: string;
  devices: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const projects: ProjectInterface[] = [
  {
    title: "SwitchDeals",
    devices: "Web",
    description: "A web app that tracks deals on Nintendo eShop.",
    imageSrc: "./assets/projects/switchdeals/1.jpg",
    link: "https://switchdeals.vercel.app",
  },
  {
    title: "TeleSpecs",
    devices: "Web",
    description:
      "A web application that tracks mobile device specifications and where users can also post reviews.",
    imageSrc: "./assets/projects/telespecs/1.png",
    link: "https://telespecs.vercel.app",
  },
  {
    title: "ètudier",
    devices: "Android",
    description:
      "A mobile application aimed at improving student productivity and academic success with features such as resource hub/pomodoro timer and many more.",
    imageSrc: "./assets/projects/etudier.jpg",
    link: "https://github.com/dlord213/etudier",
  },
  {
    title: "Tablatures",
    devices: "Android",
    description:
      "Find chords/tabs of your favorite song! An android app made using Expo.",
    imageSrc: "./assets/projects/tablature.png",
    link: "https://github.com/dlord213/tablatures",
  },

  {
    title: "Wii Parental Control Password Reset Tool",
    devices: "Web",
    description:
      "A tool that generates a Wii unlock code for Wii that has locked parental controls.",
    imageSrc: "./assets/projects/wii parental controls unlock tool.png",
    link: "/web/wii-master-key-generator",
  },
  {
    title: "3DS Parental Control Password Reset Tool",
    devices: "Web",
    description:
      "A tool that generates a unlock code for 3DS that has locked parental controls.",
    imageSrc: "./assets/projects/wii parental controls unlock tool.png",
    link: "/web/3ds-master-key-generator",
  },
  {
    title: "Windows Key Generator",
    devices: "Windows",
    description: "Generates a key for Windows 95.",
    imageSrc: "./assets/projects/windows_key_generator.png",
    link: "https://github.com/dlord213/windows-key-generator",
  },
  {
    title: "BookWormer",
    devices: "Android",
    description:
      "A mobile app that searches books using an API and displays the book details.",
    imageSrc: "./assets/projects/bookwormer/1.png",
    link: "https://github.com/dlord213/BookWormer",
  },
  {
    title: "TakeADict",
    devices: "Android",
    description:
      "A dictionary mobile app, it searches on words and displays details such as definitions and how to pronounce such word.",
    imageSrc: "./assets/projects/takeadict/1.png",
    link: "https://github.com/dlord213/TakeADict",
  },
  {
    title: "Persona 3 Skill Editor",
    devices: "Windows",
    description:
      "A desktop application that creates a .PNACH file to edit your party skills. (PCSX2)",
    imageSrc: "./assets/projects/persona_3_1.png",
    link: "https://github.com/dlord213/P3FES-Party-Editor",
  },
  {
    title: "P5Wiki",
    devices: "Windows",
    description: "A offline desktop wiki application for PERSONA 5.",
    imageSrc: "./assets/projects/persona_5_1.png",
    link: "https://github.com/dlord213/Persona-5-Guide-GUI",
  },
  {
    title: "System-Z",
    devices: "Windows",
    description:
      "A desktop application that displays your system information such as CPU, GPU, etc.",
    imageSrc: "./assets/projects/system_z_1.png",
    link: "https://github.com/dlord213/system-z",
  },
];
