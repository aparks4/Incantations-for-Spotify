import React from 'react';
import { useState, useEffect } from 'react'; 
import SpotifyWebApi from 'spotify-web-api-node';

export default function Playlist ({playlistId, accessToken}) {
    const [playlist, setPlaylist] = useState();
    const [tracks, setTracks] = useState([])
    const fetchPlaylist = async () => {
        if(!playlistId) return null;
        const spotifyApi = new SpotifyWebApi({
            clientId: "de0242264777412ea8c3adc7e7c63029",
            clientSecret: "3e44db334b744416b587c80314f5745f",
            accessToken: accessToken
        });
        const data = await spotifyApi.getPlaylist(playlistId);
        setPlaylist(data);
    }
    useEffect(() => {
        fetchPlaylist();
    }, [playlistId])

    if(!accessToken) return null
    return (
        playlist ? 
        <>
            <a href={`https://open.spotify.com/playlist/${playlist.body.id}`}>{playlist.body.name}</a>
        </>
        : 
        <h1>waiting for spell</h1>
        
    )
}