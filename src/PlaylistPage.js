import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import Spotify from "react-spotify-embed";

const PlaylistPage = () => {
    return (
        <div className="playlist-page-container">
            <Helmet>
                <title>MIRI | Playlists</title>
                <meta name="description" content="Mirimomekiku's Playlists."></meta>
            </Helmet>
            <h1>Playlist</h1>
            <div className="playlists">
                <div className="child">
                    <img src="./playlists/cry radio!-01.png"></img>
                    <h2>cry radio!</h2>
                    <p>listen till your eyes hurt!</p>
                    <Spotify link="https://open.spotify.com/playlist/20lAN9SP0MDsVS1VnPQkhh" width="100%" />
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;