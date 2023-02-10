import React from "react";
import { ReactDOM } from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <Helmet>
                <title>MIRI | About</title>
                <meta name="description" content="Mirimomekiku's About Page"></meta>
            </Helmet>
            <div className="container">
                <h1>JHON LLOYD D. VIERNES</h1>
                <p>A student who's currently studying at USTP and is a hobbyist. Not much information to be given really, still learning at the moment and is creating this website for fun!</p>
            </div>
        </div>
    );
}

export default AboutPage;