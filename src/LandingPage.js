import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div className="landing-page-container">
            <Helmet>
                <title>MIRI | Welcome</title>
                <meta name="description" content="Mirimomekiku's Landing Page."></meta>
            </Helmet>
            <img src=""></img>
            <h1>MIRIMOMEKIKU.</h1>
            <p>A student who's currently studying at USTP and is a hobbyist. For now, the goal is to graduate and develop a general skill on my hobbies.</p>
        </div>
    );
}

export default LandingPage;