import React from "react";
import './previewCard.css';

export default function PreviewCard(){
    return(
        <div className="preview-card">
            <p>Future Date</p>
            <img className="preview-icon" src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon-300x198.png" alt="weather-icon" />
            <p>Future Temp</p>
        </div>
    )
}