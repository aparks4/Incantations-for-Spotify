import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Playlist from './Playlist';
import { removeStopwords, eng, nob, spa, por, fra, deu, nld, swe, fin, dan, ita, afr, jpn, kor, vie, zho, ara, kur, tur, hin, guj, panGu } from 'stopword'


export default function Incantations ({accessToken}) {
    const [form, setForm] = useState("");
    const [playlistId, setPlaylistId] = useState('');
    const [link, setLink] = useState('');
    const BASE_URL = process.env.REACT_APP_URL || "https://hallostream.herokuapp.com/";
    

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let spotifyApi;
        const incantation = {...form};
        let tracks = [];
        let officialTracks = [];
        const reset = async () => {
            officialTracks = [];
            console.log('official tracks: ', officialTracks);
        }
        let id = '';
        const originalIncantation = incantation.incantation.split(" ");
        const keyWords = removeStopwords(originalIncantation, [...eng, ...nob, ...spa, ...por, ...fra, ...deu, ...nld, ...swe, ...fin, ...dan, ...ita, ...afr, ...jpn, ...kor, ...vie, ...zho, ...ara, ...kur, ...tur, ...hin, ...guj, ...panGu]);
        console.log(keyWords);
        try {
            spotifyApi = new SpotifyWebApi({
                clientId: "de0242264777412ea8c3adc7e7c63029",
                clientSecret: "3e44db334b744416b587c80314f5745f",
                accessToken: accessToken
            });
            const data = await spotifyApi.createPlaylist(`${incantation.incantation}`, {
                'description': 'Created over a piping hot cauldron with the Incantations for Spotify app 🪄', 
                'public': 'true',
            });
            id = data.body.id;
            setLink(incantation.incantation);
        } catch(err) {
            console.log(err);
        }
        try {
            keyWords.map(async (word) => {
                let data = await spotifyApi.searchTracks(`${word}`);
                for(let i = 0; i < data.body.tracks.items.length; i++) {
                    if(tracks.includes(data.body.tracks.items[i].artists[0].name) == false) {
                        tracks.push(data.body.tracks.items[i].artists[0].name);
                        officialTracks.push(data.body.tracks.items[i].uri);
                    }
               }
               spotifyApi.addTracksToPlaylist(id, officialTracks);
               reset();
            });
            setPlaylistId(id);
        } catch(err) {
            console.log(err)
        }
        try {
            const newPlaylist = {
                incantation: incantation.incantation,
                playlistId: id
            }

            const options = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPlaylist)

            }
            const response = await fetch(BASE_URL, options)

        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="incantations-wrapper">
        <h1 className="incantations-component-header">Summon your playlist</h1> 
        <form className="incantations-form" onSubmit={handleSubmit}>
            <input className="incantations-input" type="text" id="incantation" name="incantation" placeholder="MAGIC WORDS HERE" autoComplete="off" maxLength={100} onChange={handleChange}/>
            <input className="incantations-submit-button" type="submit" value="STIR CAULDRON"/>
        </form>
        <Playlist playlistId={playlistId} accessToken={accessToken}/>
        </div>
    )
}