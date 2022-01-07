import React from "react";
import '../Card/card.css';

export default function DetailCard() {
    return(
        <div className="card card-detail">
            <p className="today-date">January 7th, 2022</p>
            <h2>Calgary, AB</h2>
            <img className="weather-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
            <p className="icon-details">Scattered clouds</p>
            <div className="weather-info">
                <p><span className="info-title">Currently:</span> -10C</p>
                <p><span className="info-title">Feels Like:</span> -15C</p>
                <p><span className="info-title">Daily High:</span> -7C</p>
                <p><span className="info-title">Daily Low: </span> -20C</p>
                <p>
                    <img src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="sunrise-icon" className="sun-icon" />
                    <span className="info-title">Sunrise:</span> 08:00
                </p>
                <p>
                    <img src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="sunset-icon" className="sun-icon" />
                    <span className="info-title">Sunset:</span> 16:45
                </p>
            </div>
            <button className="seeMore-btn">Go Back</button>
        </div>
    )
}