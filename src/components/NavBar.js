import {useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

export default function NavBar({accessToken}) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const spotifyApi = new SpotifyWebApi({
            clientId: "de0242264777412ea8c3adc7e7c63029",
            accessToken
        });
        
        
        spotifyApi.getMe()
        .then(function(data) {
            console.log('my user data: ', data.body);
            setCurrentUser(data.body);
        }, function(err) {
            console.log(err)
        });
    }, [accessToken])
    
 
    if(!currentUser) return
    return(
        <nav>
            <p className="logged-in-message">CURRENTLY LOGGED IN AS: <a className="logged-in-message" href={currentUser.external_urls.spotify}>{currentUser.display_name}</a></p>
        </nav>
    )
}