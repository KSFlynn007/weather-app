import axios from "axios";
import React, { useState } from "react";

const Forecast = () => {

    const [responseObj, setResponseObj] = useState({});

    function getForecast(){
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
            q: 'Seattle',
            lat: '0',
            lon: '0',
            id: '2172797',
            lang: 'null',
            units: 'imperial',
            },
            headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'bffda05d02msh1d882321d286f4dp1b823cjsn27d7262d792b'
            }
        };

        axios.request(options).then(function (response) {
            let result = response.data;
            console.log(result);
            setResponseObj(result);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <h2>Find Current Weather</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>

    )
}

export default Forecast;


