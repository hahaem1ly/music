require('dotenv').config();
const axios = require('axios');

// Fetch an access token using Spotify Client ID and Secret
const getAccessToken = async () => {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
                    ).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response.data);
    }
};

// Test the function
(async () => {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken);
})();


const getTopTracks = async (accessToken) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching top tracks:', error.response.data);
    }
};

// Test the function
(async () => {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken);

    const topTracks = await getTopTracks(accessToken);
    console.log('Top Tracks:', topTracks);
})();
