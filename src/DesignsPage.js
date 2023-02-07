import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const RenderImgPanels = (props) => {

    let imgPath = "./assets/images/designs/"

    return (
        <div className="panel">
            <img src={imgPath + props.img}></img>
        </div>
    )
}

const TypographyCarousel = () => {
    return (
        <Carousel emulateTouch={true} dynamicHeight={true} autoPlay={true} showArrows={true} showIndicators={false} showStatus={false} infiniteLoop={true} swipeable={true} showThumbs={false}>
            <RenderImgPanels img="at your best, you are love-01.png"/>
            <RenderImgPanels img="dissociate-01.png"/>
            <RenderImgPanels img="dreamin and lovin-01.png"/>
            <RenderImgPanels img="how do you relieve these messy thoughts-01.png"/>
            <RenderImgPanels img="lie and fallacy-01.png"/>
            <RenderImgPanels img="melting me with your smile-01.png"/>
            <RenderImgPanels img="music makes me dismissive-01.png"/>
            <RenderImgPanels img="mirrors inside me recognize you-01.png"/>
            <RenderImgPanels img="nightmare (sixth)-01.png"/>
            <RenderImgPanels img="preaching to someone-01.png"/>
            <RenderImgPanels img="soul tied-01.png"/>
            <RenderImgPanels img="sweet as sugar-01.png"/>
            <RenderImgPanels img="we all grow-01.png"/>
            <RenderImgPanels img="this i promise you-01.png"/>

        </Carousel>
    )
}

const FavoritesCarousel = () => {
    return (
        <Carousel emulateTouch={true} dynamicHeight={true} autoPlay={true} showArrows={true} showIndicators={false} showStatus={false} infiniteLoop={true} swipeable={true} showThumbs={false}>
            <RenderImgPanels img="2022-01.png"/>
            <RenderImgPanels img="ryosuke_redsuns-01.png"/>
            <RenderImgPanels img="okinawa-01.png"/>
            <RenderImgPanels img="nobody but you-01.png"/>
            <RenderImgPanels img="bound..png"/>
            <RenderImgPanels img="all takes time (life of pablo inspired)-01.png"/>
            <RenderImgPanels img="blonded-01.png"/>
            <RenderImgPanels img="channel orange-01.png"/>
            <RenderImgPanels img="clean slate-01.png"/>
            <RenderImgPanels img="cleopatra & aphrodite-01.png"/>
            <RenderImgPanels img="everlasting love-01.png"/>
            <RenderImgPanels img="lost in thoughts-01.png"/>
            <RenderImgPanels img="find yourself ps2 box art-01.png"/>
            <RenderImgPanels img="find yourself ps2 box art back cover-01.png"/>
            <RenderImgPanels img="how could i not cry-01.png"/>
            <RenderImgPanels img="love is painful-01.png"/>
            <RenderImgPanels img="yoko kurama (clumpy grain)-01.png"/>
            <RenderImgPanels img="the morning after makes the night before seem surreal-01.png"/>
            <RenderImgPanels img="speed 180 and 240sx-01.png"/>
            <RenderImgPanels img="the present-01.png"/>
            <RenderImgPanels img="fucked up minds-01.png"/>
            <RenderImgPanels img="fucked-up girl-01.png"/>
        </Carousel>
    )
}

const DesignsPage = () => {
    return (
        <div className="designs-page-container">
            <div className="carousel-container">
                <h1>Typography</h1>
                <TypographyCarousel />
            </div>
            <div className="carousel-container">
                <h1>My Designs</h1>
                <FavoritesCarousel/>
            </div>
        </div>
    );
}

export default DesignsPage;