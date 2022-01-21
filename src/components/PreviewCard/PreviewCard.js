import React, { useEffect } from "react";
import '../Card/card.css';
import { useState } from "react/cjs/react.development";

function smallDate(timestamp){
    let unix_timestamp = timestamp
    let convertedDate = new Date(unix_timestamp * 1000);

    const options = { month: 'long', day: 'numeric' };
    const result = (convertedDate.toLocaleDateString('en-US', options));

    return result;
}

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

export default function PreviewCard(props){
    // const [date, setDate] = useState(0);
    // const [weatherIcon, setWeatherIcon] = useState("");
    // const [temp, setTemp] = useState(0);

    let day1temp;
    let day1date;
    let day1icon;

    mockedFuture.daily.forEach((element, index) => {
        day1temp = element.temp.day;
        day1date = element.dt;
        day1icon = element.weather[0].icon;
        console.log(day1icon)
        // setDate(element.dt);
        // setWeatherIcon(element.weather.icon);
        // setTemp(element.temp.day)
    });
 
    return(
        <div className="preview-card">
            {true ? 
                <>
                    <p>{smallDate(day1date)}</p>
                    <img className="previewWeather-icon" src={`http://openweathermap.org/img/wn/${day1icon}@2x.png`} alt="weather-icon" />
                    <p>{ day1temp } &deg;C</p>
                </>
            : 
            <div>
                <p>Sorry, future forecasting unavailable at this time!</p>
            </div>
            }
        </div>
    )
}