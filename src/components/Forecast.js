import axios from "axios";
import React, { useState } from "react";
import DetailCard from "./DetailCard/DetailCard";
import Card from "./Card/Card";
import PreviewCard from "./PreviewCard/PreviewCard";

const Forecast = () => {

    const [city, setCity] = useState('');
    const [responseObj, setResponseObj] = useState({});
    const [weatherIcon, setWeatherIcon] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    function getForecast(e){
        e.preventDefault();

        if(city.length === 0){
            return setError(true);
        }

        // clear state
        setError(false);
        setResponseObj({});
        setLoading(true);

        // something here to account for spaces in city string "New York"
        const uriEncodedCity = encodeURIComponent(city);

        const options = {
            method: 'GET',
            url: `https://community-open-weather-map.p.rapidapi.com/weather`,
            params: {
            q: `${uriEncodedCity}`,
            lat: '0',
            lon: '0',
            id: '2172797',
            lang: 'null',
            units: `metric`,
            },
            headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_WEATHER_API
            }
        };

        axios.request(options)
            .then(function (response) {
                // console.log(response.status)
                if(response.status !== 200) {
                    throw new Error();
                }

                let result = response.data;
                // console.log(result);
                setWeatherIcon(result.weather[0].icon);
                setResponseObj(result);
                setLoading(false);
            })
            .catch(function (error) {
                // console.error(error.message);
                setError(true);
                setLoading(false);
            });
    }

    return(
    <div>
        {/* search bar */}
        <form action="" onSubmit={getForecast}>
            <input type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            />
            <button type="submit">Get Forecast</button>
        </form>
        {/* main view weather, should only show once city has been entered */}
        {/* alternatively can just have default city load init */}
        {/* can't leave it as this, if user doesn't enter in valid city, the errors are thrown in the child components, like DetailCard */}

        {/* only load card and preview card option? and then just "hide" PreviewCard and form when clicking See More? */}
        
        {submitted ?
            <>
                <Card
                    responseObj={responseObj}
                    error={error}
                    loading={loading}
                    weatherIcon={weatherIcon}
                    submitted={submitted}
                />
                <div className='future-weather'>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                </div>
            </>
        : 
            <>
                <DetailCard
                    responseObj={responseObj}
                    error={error}
                    loading={loading}
                    weatherIcon={weatherIcon}
                />
            </>
        }
    </div>
    )
}

export default Forecast;


