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
    const [submitted, setSubmitted] = useState(false);
    const [button, setButton] = useState("See More");
    const [futureObj, setFutureObj] = useState({});

    // useEffect(() => {
    //     if(props.latitude && props.longitude !== 0){
    //         // make call with geoLat and geoLng as it is the default load behavrior
    //         axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.geoLat}&lon=${props.geoLng}&exclude=curreny,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
    //         .then((response) => {
    //             if(response.status !== 200) {
    //                 throw new Error();
    //             }
    //             console.log(response.data);
    //             setFutureObj(response.data);
    //         })
    //         .catch((error) => {
    //             // console.error(error.message);
    //         });
    //     } else {
    //         // make API call with props.latitude and props.longitude for searched city
    //         axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=curreny,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
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
    //     }
    // }, [futureObj, props.geoLat, props.geoLng, props.latitude, props.longitude]);

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
                        <>
                            {/* need to pass city for param seach in new axios call to match main card */}
                            <PreviewCard
                            futureObj={futureObj}
                              />
                        </>
                    : null }
                </div>    
            : null
            }
        </div>
    )
}