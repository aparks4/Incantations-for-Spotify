import React from 'react'
import UserAuth from './UserAuth'
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';
import NavBar from './NavBar';
import Incantations from './Incantations';
import SpotifyWebApi from 'spotify-web-api-node';
import {useState, useEffect} from 'react';
import { FlyingBroom } from './FlyingBroom';
const spotifyApi = new SpotifyWebApi({
  clientId: "de0242264777412ea8c3adc7e7c63029",
})


export default function Dashboard({code}) {
  const accessToken = UserAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
  }

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])
        
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    })
    return () => cancel = true
  }, [search, accessToken])

    return (
      <>
      <div className="dashboard-wrapper">
        <NavBar accessToken={accessToken} />
        <form 
          type="search"
          >
            <input
              className="search-input"
              type="text" 
              id="searchbar"
              placeholder="Search for Artists and Songs" 
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
              >
            </input>
        </form>
      <div className="search-results-wrapper">
        {searchResults.map(track => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </div>
      <div className="incantations-wrapper">
        <Incantations accessToken={accessToken}/>
      </div>
      <div className="music-player-wrapper">
        <Player
          accessToken={accessToken} 
          trackUri={playingTrack?.uri}
          />
      </div>
      <FlyingBroom />
      </div>
      </>
    )
}
