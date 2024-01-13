import artists from './artists.jsx'
import './spotify.css'
import React, { useState } from 'react';
import ArtistPage from './artistPage';


const Spotify = () => {
    const [currIndex, setIndex] = useState(0);
    const length = artists.length;

    const handleNext = () => {
        setIndex((currIndex + 1) % length);
    };

    const handlePrevious = () => {
        setIndex((currIndex - 1 + length) % length);
    };

    return (
        <div className="spotify">
            <button class = "left-triangle" onClick={handlePrevious}></button>
            <ArtistPage artist={artists[currIndex]} />
            <button class = "right-triangle" onClick={handleNext}></button>
        </div>
    );
};

export default Spotify;
