import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserPlaylists from './UserPlaylists';

export default function Main({ code }) {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Dashboard code={code}/>}/>
                <Route path="/playlists" element={<UserPlaylists code={code} />}/>
            </Routes>
        </main>
    )
}