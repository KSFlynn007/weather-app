import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Forecast = (props) => {
    const geoLat = props.lat;
    const geoLng = props.lng;

    const [city, setCity] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [responseObj, setResponseObj] = useState({});
    const [weatherIcon, setWeatherIcon] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(geoLat !== 0 && geoLng !==0){
            axios.request(`http://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLng}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error();
                }
                console.log(response.data);
                getForecast(response.data);
            })
            .catch((err) => {
                // console.log(err.message);
                setError(true);
                setLoading(false);
            })
        } else {
            return setError(true);
        }
    }, [geoLat, geoLng]);
    

    function getCity(e){
        e.preventDefault();

        if(city.length === 0){
            return setError(true);
        }

        const uriEncodedCity = encodeURIComponent(city);

        axios.request(`http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error();
                }

                getForecast(response.data);
                setLatitude(response.data.coord.lat);
                setLongitude(response.data.coord.lon);
            })
            .catch((error) => {
                // console.error(error.message);
                setError(true);
                setLoading(false);
            });

        // clear state after use exists:
        setCity("");
    }

    function getForecast(response){
        // clear state
        setError(false);
        setResponseObj({});
        setLoading(true);

        // set states to pass to children
        setWeatherIcon(response.weather[0].icon);
        setResponseObj(response);
        setLoading(false);
    }
    

    return(
    <div>
        <div className="searches">
            <form action="" onSubmit={getCity}>
                <input type="text"
                placeholder="Search city by name"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)} 
                />
                <button type="submit">Search Forecast</button>
            </form>        
            <p className="search-note">Note: If the location you're looking for shares a city name with another country, please specify the 2-letter country acronym at the end. Ex; London, UK vs. London, CA</p>
        </div>
        <Card
            responseObj={responseObj}
            error={error}
            loading={loading}
            weatherIcon={weatherIcon}
            latitude={latitude}
            longitude={longitude}
            geoLat={geoLat}
            geoLng={geoLng}
        />       
    </div>
    )
}

export default Forecast;


