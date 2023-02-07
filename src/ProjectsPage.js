import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="grid">
                <div className="child">
                    <img src="./assets/images/projects/persona_5_1.png"></img>
                    <h2>Persona 5 Wiki</h2>
                    <p>A simple wiki app made on Python and uses PySide6 module, for those who play Persona 5! <br></br><br></br>I made it for fun due to my love for the game, it contains informations for each bosses, dungeons and many more!</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/persona_3_1.png"></img>
                    <h2>Persona 3 Party Skill Editor</h2>
                    <p>A party editor skill app that automatically converts it onto a usable .PNACH file for PCSX2 and is made on Python and uses PySide6 module, for those who play Persona 3!</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/system_z_1.png"></img>
                    <h2>SYSTEM-Z</h2>
                    <p>An app that'll get your system information such as IP address, GPU/CPU info and many more. Made on Python and uses PySide6/GPUtil/Py-CpuInfo</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/document_converter_5_1.png"></img>
                    <h2>PDF/DOCX Converter</h2>
                    <p>An app that'll convert your PDF to DOCX and vice versa, made on Python and uses PySide6.</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/card_checker.png"></img>
                    <h2>Debit/Credit Card Number Checker</h2>
                    <p>An app that'll check whether the entered card number is valid or invalid using the Luhn algorithm, made on Python using PySide6.</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/png_to_jpg.png"></img>
                    <h2>PNG to JPG Converter</h2>
                    <p>An app that'll convert a PNG format to JPG, made on Python and uses PySide6 and PILLOW.</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/philemapp.png"></img>
                    <h2>Philemapp</h2>
                    <p>A simple audio player that can play audio files and read metadata, made on C# and uses NAudio.</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/tekken-01.png"></img>
                    <h2>TEK-WIKI</h2>
                    <p>An offline mobile wiki app for Android, it's for those who play the TEKKEN game series. It contains information about each games and each characters, planning to include a move list for each character on every games with frame datas! Made using Flutter and uses pubs.</p>
                </div>
                <div className="child">
                    <img src="./assets/images/projects/the_fox_run.png"></img>
                    <h2>The Fox Run</h2>
                    <p>An game that features a fox roaming around the jungle to collect keys/coins and discover other undiscovered areas, made on GoDot game engine.</p>
                </div>

            </div>
        </div>
    )
}
 
export default ProjectsPage;