// forecast has essentiall replaced what search component was going to be by being the component that fetches the api data

import axios from "axios";
import React, { useState } from "react";
import DetailCard from "./DetailCard/DetailCard";

const Forecast = () => {

    const [city, setCity] = useState('');
    // const [unit, setUnit] = useState('metric');
    const [responseObj, setResponseObj] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    function getForecast(e){
        e.preventDefault();

        if(city.length === 0){
            return setError(true);
        }

        // clear state
        setError(false);
        setResponseObj({});
        setLoading(true);

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
                setResponseObj(result);
                setLoading(false);
            })
            .catch(function (error) {
                // console.error(error.message);
                setError(true);
                setLoading(false);
            });
    }

    return (
        <div>
            <form action="" onSubmit={getForecast}>
                <input type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)} 
                />
                {/* <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <label htmlFor="">
                    <input type="radio"
                    name="units"
                    checked={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)} 
                    />
                    Farenheit
                </label> */}
                <button type="submit">Get Forecast</button>

            </form>
            <DetailCard
                responseObj={responseObj}
                error={error}
                loading={loading}
            />     
        </div>

    )
}

export default Forecast;

