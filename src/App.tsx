import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsFeed from './news';
import ProfilePage from './ProfilePage'; // deine Login/Profile-Seite

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NewsFeed />} />
                <Route path="/profil" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
