import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';


export default function UserPlaylists({ accessToken }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: "de0242264777412ea8c3adc7e7c63029",
    clientSecret: "3e44db334b744416b587c80314f5745f",
    accessToken: accessToken
  })

  const [playlist, setPlaylist] = useState();

  return(
      <h1>User Playlists</h1>
  )
}