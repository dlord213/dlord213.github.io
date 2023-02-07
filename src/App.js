import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import LandingPage from "./LandingPage";
import './Main.css';
import ProjectsPage from "./ProjectsPage";
import DesignsPage from "./DesignsPage";
import PhotographyPage from "./PhotographyPage";
import NoPage from "./NoPage"


function SocMedIcons() {
  return (
    <div className="bottom">
      <SocialIcon url="https://www.facebook.com/mirimomekiku/" fgColor="white" className="href-nonhover"/>
      <SocialIcon url="https://twitter.com/miriher2" fgColor="white" className="href-nonhover" />
      <SocialIcon url="https://github.com/dlord213" fgColor="white" className="href-nonhover" />
      <SocialIcon url="https://www.instagram.com/tsukeh2/" fgColor="white" className="href-nonhover" />
      <SocialIcon url="https://open.spotify.com/user/316okqwi4acmxle2hzky3xnk2tx4" fgColor="white" className="href-nonhover" />
    </div>
  )
}

function MainLayout() {
  return (
    <div className='main-layout'>

      <header>
        <div className="header-layout">
          <div className="center">
            <Link to="/" id="homeref">HOME</Link>
            <Link to="projects" id="projref">PROJECTS</Link>
            <Link to="designs" id="designsref">DESIGNS</Link>
            <Link to="photography" id="photoref">PHOTOGRAPHY</Link>
            <Link to="s" id="threeDref">3D</Link>
            <Link to="s" id="beatref">PRODUCED BEATS</Link>
            <Link to="s" id="aboutref">ABOUT</Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer>
        <div className="footer-layout">
          <div className="top">
            <div className="left">
              <Link to="" className="href-nonhover"><h1>mirimomekiku.</h1></Link>
            </div>
            <SocMedIcons />
          </div>
        </div>
      </footer>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="designs" element={<DesignsPage />} />
          <Route path="photography" element={<PhotographyPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
