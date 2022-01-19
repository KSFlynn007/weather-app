import React, { useEffect } from "react";
import '../Card/card.css';
import axios from "axios";
import { useState } from "react/cjs/react.development";

function smallDate(timestamp){
    let unix_timestamp = timestamp
    let convertedDate = new Date(unix_timestamp * 1000);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const result = (convertedDate.toLocaleDateString('en-US', options));

    return result;
}

export default function PreviewCard(props){
    const lat = props.lat;
    const lon = props.lon;

    const [futureObj, setFutureObj] = useState({});
    const [status, setStatus] = useState(0);


    // use effect to make sure we get futureObj immediately?
    // should include all calcs for dates, img and weather avg?
    
    // let tomorrow = smallDate(futureObj.dt);
    // will need one for each of 5 days forward?


    useEffect(() => {
        setStatus(futureObj.status);
    }, [futureObj]);
    
    
    function futureForecast(e){
        e.preventDefault();

        axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=curreny,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error();
                }
                // console.log(response);
                setFutureObj(response);
            })
            .catch((error) => {
                // console.error(error.message);
            });
    }

    // console.log(futureObj.status);
 
    return(
        <div className="preview-card" onLoad={futureForecast}>
            {status === 200 ? 
                <>
                    <p>Today Date</p>
                    <img className="preview-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
                    <p>Future Temp</p>
                </>
            : 
            <div>
                <p>Sorry, future forecasting unavailable at this time!</p>
            </div>
            }
        </div>
    )
}