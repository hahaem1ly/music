import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ token }) {
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        if (!token) return;

        // Fetch user's top tracks
        axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            setTopTracks(response.data.items);
        })
        .catch((error) => {
            console.error('Error fetching top tracks:', error);
        });
    }, [token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Your Top Tracks</h2>
            <ul>
                {topTracks.map((track) => (
                    <li key={track.id}>
                        {track.name} by {track.artists[0].name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
