import React from "react";
import "./styles.css";

function App() {
    return (
        <div className="vinyl-container">
            <div className="vinyl-wrapper">
                <img
                    src="./img/vinyl.png"
                    alt="Vinyl Record"
                    className="vinyl"
                />
            </div>
            <div className="content">
                <h1 className="title">
                    <span className="highlight">Spotify Dashboard</span>
                </h1>
                <p className="subtitle">
                    Dive into your Spotify stats and favorite tracks.
                </p>
                <a href="#">
                    <button className="login-btn">Login with Spotify</button>
                </a>
            </div>
        </div>
    );
}

export default App;
