import RenderProjectCard from "../components/project_card";
export default function ProjectSection() {
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div
        className="grid xl:grid-cols-2 xl:grid-rows-2 gap-4 "
        id="projects-section"
      >
        <RenderProjectCard
          title="Tablatures"
          devices="Android"
          description="Find chords/tabs of your favorite song! An android app made using Expo."
          imageSrc="./assets/images/projects/tablature.png"
          link="https://github.com/dlord213/tablatures"
        />
        <RenderProjectCard
          title="SwitchDeals"
          devices="Android"
          description="A mobile app that tracks the deals on Nintendo eShop."
          imageSrc="./assets/images/projects/switchdeals/1.png"
          link="https://github.com/dlord213/SwitchDeals"
        />
        <RenderProjectCard
          title="BookWormer"
          devices="Android"
          description="A mobile app that searches books using an API and displays the book details."
          imageSrc="./assets/images/projects/bookwormer/1.png"
          link="https://github.com/dlord213/BookWormer"
        />
        <RenderProjectCard
          title="TakeADict"
          devices="Android"
          description="A dictionary mobile app, it searches on words and displays details such as definitions and how to pronounce such word. "
          imageSrc="./assets/images/projects/takeadict/1.png"
          link="https://github.com/dlord213/TakeADict"
        />
        <RenderProjectCard
          title="TEK-WIKI"
          devices="Android"
          description="A offline wiki app for the TEKKEN series."
          imageSrc="./assets/images/projects/tekken-01.png"
          link="https://github.com/dlord213/flutter-tekken-wiki"
          style="bg-[#13160E]"
        />
        <RenderProjectCard
          title="Card Checker"
          devices="Windows"
          description="A simple desktop application that checks if your credit/debit card number is valid by using Luhn Algorithm."
          imageSrc="./assets/images/projects/card_checker.png"
          link="https://github.com/dlord213/card-checker-gui"
        />
        <RenderProjectCard
          title="Library Information System"
          devices="Windows"
          description="A desktop application that stores book details."
          imageSrc="./assets/images/projects/lib_system.png"
          link="https://github.com/dlord213/finals-lib-system"
        />
        <RenderProjectCard
          title="PassGen"
          devices="Windows"
          description="A desktop application that generates password."
          imageSrc="./assets/images/projects/password_generator.png"
          link="https://github.com/dlord213/password-generator"
        />
        <RenderProjectCard
          title="Persona 3 Skill Editor"
          devices="Windows"
          description="A desktop application that creates a .PNACH file to edit your party skills. (PCSX2)"
          imageSrc="./assets/images/projects/persona_3_1.png"
          link="https://github.com/dlord213/P3FES-Party-Editor"
        />
        <RenderProjectCard
          title="P4Guide"
          devices="Windows"
          description="A offline desktop guide application for PERSONA 4."
          imageSrc="./assets/images/projects/persona_4_guide.png"
          link="https://github.com/dlord213/persona-4-golden-guide"
        />
        <RenderProjectCard
          title="P5Wiki"
          devices="Windows"
          description="A offline desktop wiki application for PERSONA 5."
          imageSrc="./assets/images/projects/persona_5_1.png"
          link="https://github.com/dlord213/Persona-5-Guide-GUI"
        />
        <RenderProjectCard
          title="System-Z"
          devices="Windows"
          description="A desktop application that displays your system information such as CPU, GPU, etc."
          imageSrc="./assets/images/projects/system_z_1.png"
          link="https://github.com/dlord213/system-z"
        />
        <RenderProjectCard
          title="TheFoxRun"
          devices="Windows"
          description="A simple game made on GoDot that features a fox and contains few levels to finish."
          imageSrc="./assets/images/projects/the_fox_run.png"
          link="https://github.com/dlord213/the-fox-run"
        />
        <RenderProjectCard
          title="Windows Key Generator"
          devices="Windows"
          description="A desktop application that generates a key for Windows 95."
          imageSrc="./assets/images/projects/windows_key_generator.png"
          link="https://github.com/dlord213/windows-key-generator"
        />
        <RenderProjectCard
          title="Wii Parental Control Password Reset Tool"
          devices="Browser"
          description="A tool that generates a Wii unlock code for Wii that has locked parental controls."
          imageSrc="./assets/images/projects/wii parental controls unlock tool.png"
          link="/web-projects/wii-master-key-generator"
        />
        <RenderProjectCard
          title="3DS Parental Control Password Reset Tool"
          devices="Browser"
          description="A tool that generates a unlock code for 3DS that has locked parental controls."
          imageSrc="./assets/images/projects/wii parental controls unlock tool.png"
          link="/web-projects/3ds-master-key-generator"
        />
      </div>
    </>
  );
}
