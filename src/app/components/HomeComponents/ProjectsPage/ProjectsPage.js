"use client";
import { useState, useEffect, useRef } from "react";
import WorkSansFont from "../../../fonts/WorkSansFont";
import Link from "next/link";

const Section = (props) => {
  const { link, title, description, images, panel_id, ref } = props;

  return (
    <div className={" " + panel_id} ref={ref}>
      <h1
        className={
          WorkSansFont.className +
          " font-normal text-xl  hover:text-[#BE3C4D] transition-all delay-0 duration-500 ease-in-out hover:translate-x-2"
        }
      >
        <Link href={link} className="">
          {title}
        </Link>
      </h1>
      <p className={WorkSansFont.className + " font-light lg:w-1/2"}>
        {description}
      </p>
      <div className="flex flex-row gap-4 my-4">{images}</div>
    </div>
  );
};

const Button = (props) => {
  const { style, title, link } = props;

  return (
    <button
      className={
        WorkSansFont.className +
        " hidden lg:block font-light text-xl hover:bg-[#BE3C4D]  hover:text-white hover:px-8 p-2 transition-all delay-0 duration-500 web-project-buttons-animate " +
        style
      }
    >
      <Link href={"/web-projects/" + link}>{title}</Link>
    </button>
  );
};

const NonWebProjects = [
  <>
    <Section
      title="SwitchDeals"
      description="An android app that finds the best deals on eShop, made using bare React Native CLI."
      images={
        <>
          <img
            src="/assets/images/projects/switchdeals/1.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/switchdeals/2.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/switchdeals/3.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/switchdeals/4.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/switchdeals/5.png"
            className="w-1/6 object-contain rounded-lg"
          />
        </>
      }
      panel_id="panel-1"
      link="https://github.com/dlord213/SwitchDeals"
    />
    <Section
      title="TakeADict"
      description="A simple dictionary app that fetches data on a free API, made using
        Expo."
      panel_id="panel-2"
      link="https://github.com/dlord213/SwitchDeals"
      images={
        <>
          <img
            src="/assets/images/projects/takeadict/1.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/takeadict/2.png"
            className="w-1/6 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="BookWormer"
      description="A book-fetching app made on Expo for Android devices."
      panel_id="panel-3"
      link="https://github.com/dlord213/BookWormer"
      images={
        <>
          <img
            src="/assets/images/projects/bookwormer/1.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/bookwormer/2.png"
            className="w-1/6 object-contain rounded-lg"
          />
          <img
            src="/assets/images/projects/bookwormer/3.png"
            className="w-1/6 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Windows Key Generator"
      description="An app made on Python using PySide6 that can generate keys for Windows
      95 (OEM/Retail)."
      panel_id="panel-4"
      link="https://github.com/dlord213/windows-key-generator"
      images={
        <>
          <img
            src="/assets/images/projects/windows_key_generator.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Card Checker"
      description="An app that'll check whether the entered card number is valid or
      invalid using the Luhn algorithm and checks your card brand, made on
      Python using PySide6."
      panel_id="panel-5"
      link="https://github.com/dlord213/card-checker"
      images={
        <>
          <img
            src="/assets/images/projects/card_checker.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Lib-System"
      description="A simple library book information that displays a book list and can
      also add/remove book in the list made on Python using PySide6."
      panel_id="panel-6"
      link="https://github.com/dlord213/library-book-system"
      images={
        <>
          <img
            src="/assets/images/projects/lib_system.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="PassGen"
      description="A simple app that uses secrets module to generate a password with
      basic level of security on Python using PySide6/secrets."
      panel_id="panel-7"
      link="https://github.com/dlord213/password-generator"
      images={
        <>
          <img
            src="/assets/images/projects/password_generator.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Persona 3 FES Skill Editor"
      description="A party editor skill app that automatically converts it onto a usable
      .PNACH file for PCSX2 and is made on Python and uses PySide6 module."
      panel_id="panel-8"
      link="https://github.com/dlord213/P3FES-Party-Editor"
      images={
        <>
          <img
            src="/assets/images/projects/persona_3_1.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Persona 4 Golden Guide"
      description="A party editor skill app that automatically converts it onto a usable
      .PNACH file for PCSX2 and is made on Python and uses PySide6 module."
      panel_id="panel-9"
      link="https://github.com/dlord213/persona-4-golden-guide"
      images={
        <>
          <img
            src="/assets/images/projects/persona_4_guide.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="Persona 5 Wiki App"
      description="A simple wiki app made on Python and uses PySide6 module, for those
      who play Persona 5! It contains informations for each bosses, dungeons and many more!"
      panel_id="panel-10"
      link="https://github.com/dlord213/Persona-5-Guide-GUI"
      images={
        <>
          <img
            src="/assets/images/projects/persona_5_1.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="TEK-WIKI"
      description="An offline mobile wiki app for Android, it's for those who play
      the TEKKEN game series. It contains information about each games and
      each characters, planning to include a move list for each character on
      every games with frame datas! Made using Flutter and uses pubs."
      panel_id="panel-11"
      link="https://github.com/dlord213/flutter-tekken-wiki"
      images={
        <>
          <img
            src="/assets/images/projects/tekken-01.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="THE FOX RUN"
      description="An game that features a fox roaming around the jungle to collect
      keys/coins and discover other undiscovered areas, made on GoDot game
      engine."
      panel_id="panel-12"
      link="https://github.com/dlord213/the-fox-run"
      images={
        <>
          <img
            src="/assets/images/projects/the_fox_run.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
    <Section
      title="SYSTEM-Z"
      description="An app that'll get your system information such as IP address,
      GPU/CPU info and many more. Made on Python."
      panel_id="panel-13"
      link="https://github.com/dlord213/the-fox-run"
      images={
        <>
          <img
            src="/assets/images/projects/system_z_1.png"
            className="w-1/3 object-contain rounded-lg"
          />
        </>
      }
    />
  </>,
];

export const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen lg:p-0 p-4 lg:flex-shrink-0 flex-shrink"
      id="projects-page"
    >
      <h1
        className={
          WorkSansFont.className + " font-bold lg:text-8xl text-6xl my-4"
        }
      >
        projects
      </h1>
      <div className="flex flex-row flex-wrap my-8 gap-2 w-1/2">
        <Button title="100 Days of Poetry" link="100-days-of-poetry"/>
        <Button title="Animal Facts Generator" link="animal-facts-generator"/>
        <Button title="Card Checker" link="card-checker"/>
        <Button title="Channel Orange" link="channel-orange"/>
        <Button title="Dicfinition" link="dicfinition"/>
        <Button title="Gradient Generator" link="gradient-generator"/>
        <Button title="Hobbies Generator" link="hobbies-generator"/>
        <Button title="Nymsfinder" link="nymsfinder"/>
        <Button title="Quote Generator" link="quote-generator"/>
        <Button title="Trivia Generator" link="trivia-generator"/>
        <Button title="Weather Checker" link="weather-checker"/>
      </div>
      {NonWebProjects[0]}
    </div>
  );
};
