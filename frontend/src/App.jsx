import React from "react";
import "./styles.css";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URI)}&scope=user-read-private%20user-read-email%20user-top-read`;

function App() {
    return (
        <div className="vinyl-container">
            {/* Spinning Vinyl */}
            <div className="vinyl-wrapper">
                <img
                    src="./img/vinyl.png"
                    alt="Vinyl Record"
                    className="vinyl"
                />
            </div>

            {/* Content */}
            <div className="content">
                <h1 className="title">
                    <span className="highlight">Spotify Dashboard</span>
                </h1>
                <p className="subtitle">
                    A better version of spotify wrapped
                </p>
                <a href={AUTH_URL}>
                    <button className="login-btn">Login with Spotify</button>
                </a>
            </div>
        </div>
    );
}

export default App;
