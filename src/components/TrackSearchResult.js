import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track);
    }
    return (
        <>
            <div className="search-result" onClick={handlePlay}>
                    <img className="search-result-art" src={track.albumUrl} />
                    <p className="search-result-track">{track.title}</p>
                    <p className="search-result-artist">{track.artist}</p>
            </div>
        </>
    )
}
