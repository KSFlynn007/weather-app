import React, { useEffect, useState } from "react";
import './card.css';
import PreviewCard from "../PreviewCard/PreviewCard";
import axios from "axios";

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
    // const lat = props.latitude;
    // const lon = props.longitude;


    const [submitted, setSubmitted] = useState(false);
    const [button, setButton] = useState("See More");
    const [futureObj, setFutureObj] = useState({});

    // useEffect(() => {
    //     axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.geoLat}&lon=${props.geoLng}&exclude=curreny,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
    //         .then((response) => {
    //             if(response.status !== 200) {
    //                 throw new Error();
    //             }
    //             // console.log(response.data);
    //             setFutureObj(response.data);
    //         })
    //         .catch((error) => {
    //             // console.error(error.message);
    //         });
    // }, [futureObj, lat, lon, props.geoLat, props.geoLng]);

    // ex of one mocked day
    const mockedFuture = {
        "lat": 33.44,
        "lon": -94.04,
        "timezone": "America/Chicago",
        "timezone_offset": -21600, 
        "daily": [
            {
            "dt": 1618308000,
            "sunrise": 1618282134,
            "sunset": 1618333901,
            "moonrise": 1618284960,
            "moonset": 1618339740,
            "moon_phase": 0.04,
            "temp": {
                "day": 279.79,
                "min": 275.09,
                "max": 284.07,
                "night": 275.09,
                "eve": 279.21,
                "morn": 278.49
            },
            "feels_like": {
                "day": 277.59,
                "night": 276.27,
                "eve": 276.49,
                "morn": 276.27
            },
            "pressure": 1020,
            "humidity": 81,
            "dew_point": 276.77,
            "wind_speed": 3.06,
            "wind_deg": 294,
            "weather": [
                {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
                }
            ],   
        "clouds": 56,
        "pop": 0.2,
        "rain": 0.62,
        "uvi": 1.93
        }
        ]  
    }
    

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
            {props.error && <p className="error-message">Cannot find that location</p>}
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

    
                            {submitted ?
                                <>
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
                            futureObj={futureObj}
                              />
                        </div>
                    : null }
                </div>    
            : null
            }
        </div>
    )
}