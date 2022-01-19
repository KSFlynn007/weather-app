import React from "react";
import '../Card/card.css';
import axios from "axios";

export default function PreviewCard(props){

    const city = props.city;
    const country = props.country;

    function futureForecast(e){
        e.preventDefault();

    }
 
    return(
        <div className="preview-card" onLoad={futureForecast}>
            <p>Today Date</p>
            <img className="preview-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
            <p>Future Temp</p>
        </div>
    )
}