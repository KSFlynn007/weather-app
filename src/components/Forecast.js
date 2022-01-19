import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Forecast = () => {
    const [city, setCity] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [responseObj, setResponseObj] = useState({});
    const [weatherIcon, setWeatherIcon] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    // gets lat & long on mount/load
    useEffect(() => {
        if('geolocation' in navigator){
            const options = {
                enableHighAccuracy : false, 
                timeout: 5000,
                maximumAge: 0
            }

            navigator.geolocation.getCurrentPosition(success, error, options);

            function success(pos){
                let lng = pos.coords.longitude;
                let lat = pos.coords.latitude;

                setLatitude(lat);
                setLongitude(lng);
            }

            function error(err){
                console.log(err);
            }
        } else {
            console.log('Sorry, looks like your browser doesn\'t support geolocation!');
        }
    }, []);
    

    function geoCity () {
        // geolocation API
        if(latitude !== 0 && longitude !==0){
            axios.request(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error();
                }
                // console.log(response.data);
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

        // clear state after use exists:
        setLatitude(0);
        setLongitude(0);
    }

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

                // console.log(response.data);
                getForecast(response.data);
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
            <button type="submit" onClick={() => geoCity()}>Get Your Location Weather</button>
            <p className="search-note">Note: If the location you're looking for shares a city name with another country, please specify the 2-letter country acronym at the end. Ex; London, UK vs. London, CA</p>
            <form action="" onSubmit={getCity}>
                <input type="text"
                placeholder="Search city by name"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)} 
                />
                <button type="submit">Search Forecast</button>
            </form>        

        </div>
        <Card
            responseObj={responseObj}
            error={error}
            loading={loading}
            weatherIcon={weatherIcon}
        />       
    </div>
    )
}

export default Forecast;


