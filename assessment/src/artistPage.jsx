import './artistPage.css'
import React from 'react';

const ArtistPage = ({ artist }) => {
    return (
        <div className="artistPage">
            <div className="infoBox">
                <h2>{artist.name}</h2>
                <img src={artist.image_src} alt={artist.name} />
                <b> <p className = "minutes">Minutes Listened: </p>
                <p className = "num"> {artist.minutes} </p> </b>
            </div>
            <div className="songsBox">
                <h2 className = "header">Top Songs</h2>
                <ol> <b>
                    {artist.songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))} </b>
                </ol> 
            </div>
        </div>
    );
};

export default ArtistPage;

