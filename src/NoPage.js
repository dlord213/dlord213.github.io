import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NoPage = () => {
    return ( 
        <div className="no-page-container">
            <h1>❌ PAGE NOT FOUND</h1>
            <h3>Either the page is not yet implemented and is to be implemented soon or you're redirecting to pages that doesn't exist. </h3>
        </div>
    );
}
 
export default NoPage;