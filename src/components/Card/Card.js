import React from "react";
import './card.css';

export default function Card(){
    return(
        <div className="card">
            <p>Today's Date</p>
            <h2>Calgary, AB</h2>
            <img className="weather-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
            <div className="weather-info">
                <p><span className="info-title">Currently:</span> -10C</p>
                <p><span className="info-title">Feels Like:</span> -15C</p>
                <p><span className="info-title">Daily High:</span> -7C</p>
                <p><span className="info-title">Daily Low: </span> -20C</p>
            </div>
            <button className="seeMore-btn">See More</button>
        </div>
    )
}