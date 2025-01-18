import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Callback from './Callback';
import Dashboard from './Dashboard';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URI)}&scope=user-top-read`;

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Spotify Stats Dashboard</h1>
                            <a href={AUTH_URL}>
                                <button>Login with Spotify</button>
                            </a>
                        </div>
                    }
                />
                <Route
                    path="/callback"
                    element={<Callback setToken={setToken} />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard token={token} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
