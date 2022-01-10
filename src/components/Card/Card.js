import React, { useState } from "react";
import './card.css';
import PreviewCard from "../PreviewCard/PreviewCard";

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

export default function Card(props){
    const [submitted, setSubmitted] = useState(false);
    const [button, setButton] = useState("See More");

    let currentDate = convertDate(props.responseObj.dt);
    let icon = props.weatherIcon;

    function handleSubmit(){
        if(!submitted){
            setSubmitted(true);
            setButton("Go Back");
        } else {
            setSubmitted(false);
            setButton("See More");
        }
    }

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
                            <p><span className="info-title">Daily High:</span> {Math.round(props.responseObj.main.temp_max)} &deg;C </p>
                            <p><span className="info-title">Feels Like:</span> {Math.round(props.responseObj.main.feels_like)} &deg;C</p>
                            <p><span className="info-title">Daily Low: </span> {Math.round(props.responseObj.main.temp_min)} &deg;C </p>
    
                            {submitted ?
                                <>
                                    <p>
                                        <img src={require("../../img/sunrise.png")} alt="sunrise-icon" className="sun-icon" />
                                        <span className="info-title">Sunrise:</span> {convertTime(props.responseObj.sys.sunrise)}
                                    </p>
                                    <p>
                                        <img src={require("../../img/sunset.png")} alt="sunset-icon" className="sun-icon" />
                                        <span className="info-title">Sunset:</span> {convertTime(props.responseObj.sys.sunset)}
                                    </p>
                                </>
                            : null
                            }
                        </div>
                        <button className="seeMore-btn" onClick={() => handleSubmit()}>{button}</button>
                    </div>
                    {!submitted ? 
                        <div className='future-weather'>
                            {/* need to pass city for param seach in new axios call to match main card */}
                            <PreviewCard
                            city={props.responseObj.name}
                            country={props.responseObj.sys.country}
                            />
                        </div>
                    : null }
                </div>    
            : null
            }
        </div>
    )
}