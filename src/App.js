import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import UserPlaylists from './components/UserPlaylists';
import { Routes, Route } from 'react-router-dom'
import UserAuth from './components/UserAuth';
import SpotifyWebApi from 'spotify-web-api-node';



const code = new URLSearchParams(window.location.search).get('code')

function App() {

      return ( 
            code ?
            <Routes>
                  <Route path="/" element={<Dashboard code={code}/>}/>
                  <Route path="/playlists" element={<UserPlaylists />}/>
            </Routes>
            : 
            <Login />
)
}

export default App;