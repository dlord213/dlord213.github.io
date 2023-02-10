import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from "react-helmet";

const RenderImgPanels = (props) => {

    let imgPath = "./assets/images/landscape_imgs/"

    return (
        <div className="panel">
            <img src={imgPath + props.img}></img>
        </div>
    )
}

const ImgCarousel = () => {
    return (
        <Carousel emulateTouch={true} dynamicHeight={true} showArrows={true} showIndicators={false} showStatus={false} infiniteLoop={true} swipeable={true} showThumbs={false}>
            <RenderImgPanels img="1.jpg" />
            <RenderImgPanels img="2.jpg" />
            <RenderImgPanels img="3.jpg" />
            <RenderImgPanels img="4.jpg" />
            <RenderImgPanels img="5.jpg" />
            <RenderImgPanels img="6.jpg" />
            <RenderImgPanels img="7.jpg" />
            <RenderImgPanels img="8.jpg" />
            <RenderImgPanels img="9.jpg" />
            <RenderImgPanels img="10.jpg" />
            <RenderImgPanels img="11.jpg" />
            <RenderImgPanels img="12.jpg" />
            <RenderImgPanels img="13.jpg" />
            <RenderImgPanels img="14.jpg" />
            <RenderImgPanels img="15.jpg" />
            <RenderImgPanels img="16.jpg" />
            <RenderImgPanels img="17.jpg" />
            <RenderImgPanels img="18.jpg" />
            <RenderImgPanels img="19.jpg" />
            <RenderImgPanels img="20.jpg" />
            <RenderImgPanels img="20 (2).jpg" />
            <RenderImgPanels img="21.jpg" />
            <RenderImgPanels img="22.jpg" />
            <RenderImgPanels img="22 (2).jpg" />
            <RenderImgPanels img="27.jpg" />
            <RenderImgPanels img="28.jpg" />
            <RenderImgPanels img="29.jpg" />
            <RenderImgPanels img="29 (2).jpg" />
            <RenderImgPanels img="30.jpg" />
            <RenderImgPanels img="31.jpg" />
        </Carousel>
    )
}

const PhotographyPage = () => {
    return (
        <div className="photography-container">
            <Helmet>
                <title>MIRI | Photos</title>
                <meta name="description" content="Mirimomekiku's Photos."></meta>
            </Helmet>
            <div className="carousel-container" id="photography-carousel">
                <h1>Photos</h1>
                <ImgCarousel />
            </div>
        </div>
    );
}

export default PhotographyPage;