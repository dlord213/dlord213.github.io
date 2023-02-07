import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const RenderVidPanels = (props) => {

    let imgPath = "./assets/models/"

    return (
        <div className="vid-panel">
            <video controls loop>
                <source src={imgPath + props.vid} type={props.type} />
            </video>
            <h1>{props.title}</h1>
        </div>
    )
}

const BlenderPage = () => {
    return (
        <div className="blender-container">
            <h1>Models (Blender)</h1>
            <div className="grid">
                <RenderVidPanels vid="guitar (ver 2).mp4" type="video/mp4" title="Guitar" />
                <RenderVidPanels vid="KATANA.mp4" type="video/mp4" title="Katana"/>
                <RenderVidPanels vid="MIRIMOMEKIKU.mp4" type="video/mp4" title="Name Render"/>
                <RenderVidPanels vid="FIRST PS1 GRAPHICS (2).mp4" type="video/mp4" title="PS1 Graphics"/>
                <RenderVidPanels vid="CONSOLE.mp4" type="video/mp4" title="Handheld Console"/>
                <RenderVidPanels vid="liminal space ps1 with sound.mp4" type="video/mp4" title="Liminal Space (PS1 Graphics)"/>
                <RenderVidPanels vid="FEDORA HAT.mp4" type="video/mp4" title="Glowing Fedora Hat"/>

            </div>
        </div>
    );
}

export default BlenderPage;