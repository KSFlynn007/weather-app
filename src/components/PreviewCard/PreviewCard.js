import React, { useEffect } from "react";
import '../Card/card.css';
import { useState } from "react/cjs/react.development";

// function smallDate(timestamp){
//     let unix_timestamp = timestamp
//     let convertedDate = new Date(unix_timestamp * 1000);

//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const result = (convertedDate.toLocaleDateString('en-US', options));

//     return result;
// }

export default function PreviewCard(props){
    // use effect to make sure we get futureObj immediately?
    // should include all calcs for dates, img and weather avg?
    
    // let tomorrow = smallDate(futureObj.dt);
    // will need one for each of 5 days forward?


    // console.log(futureObj.status);
 
    return(
        <div className="preview-card">
            {true ? 
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