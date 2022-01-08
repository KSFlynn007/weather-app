// maybe everything in here needs to be moved to Card.js, and have that be the main component with fields hidden, rahter than needing to duplicate most of the functions and content

import React from "react";
import '../Card/card.css';

function convertTime(timestamp){
    let unix_timestamp = timestamp
    let date = new Date(unix_timestamp * 1000);
    const time = date.toLocaleTimeString();

    return time;
}

function convertDate(timestamp){
    let unix_timestamp = timestamp
    let convertedDate = new Date(unix_timestamp * 1000);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const result = (convertedDate.toLocaleDateString('en-US', options));

    return result;
}

function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function DetailCard(props) {
    let currentDate = convertDate(props.responseObj.dt);
    let icon = props.weatherIcon;

    return(
        <div>
            {props.error && <p className="error-message">Please enter a valid city.</p>}
            {props.loading && <p className="loading-message">Loading...</p>}
            
            {props.responseObj.cod === 200 ?
                <div>
                    <div className="card card-detail">
                        <p className="today-date">{currentDate}</p>
                        <h2>{props.responseObj.name}, {props.responseObj.sys.country}</h2>
                        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
                        <p className="icon-details">{capitalize(props.responseObj.weather[0].description)}</p>
                        <div className="weather-info">
                            <p><span className="info-title">Currently:</span> {Math.round(props.responseObj.main.temp)} &deg;C</p>
                            <p><span className="info-title">Feels Like:</span> {Math.round(props.responseObj.main.feels_like)} &deg;C</p>
                            <p><span className="info-title">Daily High:</span> {Math.round(props.responseObj.main.temp_max)} &deg;C </p>
                            <p><span className="info-title">Daily Low: </span> {Math.round(props.responseObj.main.temp_min)} &deg;C </p>
                            <p>
                                <img src={require("../../img/sunrise.png")} alt="sunrise-icon" className="sun-icon" />
                                <span className="info-title">Sunrise:</span> {convertTime(props.responseObj.sys.sunrise)}
                            </p>
                            <p>
                                <img src={require("../../img/sunset.png")} alt="sunset-icon" className="sun-icon" />
                                <span className="info-title">Sunset:</span> {convertTime(props.responseObj.sys.sunset)}
                            </p>
                        </div>
                        <button className="seeMore-btn">Go Back</button>
                    </div>
                </div>    
            : null
            }
        </div>
    )
}