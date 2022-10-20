import React from 'react'
import { FlyingCauldron } from './FlyingCauldron'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=de0242264777412ea8c3adc7e7c63029&response_type=code&redirect_uri=https://632d4dba13263e422f1d773d--prismatic-kangaroo-4608c3.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public"


export default function Login() {
  return (
    <>
      <div className="landing-page">
        <h1 className="landing-page-title">Incantations</h1>
        <h2 className="landing-page-subtitle">A playlist generator for Spotify</h2>
        <div class="login-marquee">
          <div class="track">
            <div class="content">
              <a className="login-button" href={AUTH_URL}>  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify  Login with Spotify</a>
            </div>
          </div>
        </div>
      </div>
      <FlyingCauldron />
    </>
  )
}