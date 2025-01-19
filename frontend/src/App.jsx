import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading animation duration
        const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Loading Animation */}
            {loading && (
                <div className="loading-screen">
                    <div className="logo-animation">
                        <img src="./img/logo.png" alt="Logo" className="logo" />
                    </div>
                </div>
            )}

            {/* Main App Content */}
            {!loading && (
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
                        </p>
                        <a href="#">
                            <button className="login-btn">Login with Spotify</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
