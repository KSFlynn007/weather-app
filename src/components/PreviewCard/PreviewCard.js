import React from "react";
import '../Card/card.css';
import axios from "axios";

export default function PreviewCard(props){

    const city = props.city;
    const country = props.country;

    function futureForecast(e){
        e.preventDefault();

        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
            params: {q: `${city},${country}`},
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'bffda05d02msh1d882321d286f4dp1b823cjsn27d7262d792b'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
 
    return(
        <div className="preview-card" onLoad={futureForecast}>
            <p>Today Date</p>
            <img className="preview-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
            <p>Future Temp</p>
        </div>
    )
}