import Forecast from "./components/Forecast";
import './index.css';
import React, { useState } from "react";


function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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

  return(
    <Forecast
      lat={latitude}
      lng={longitude}
    />
  )
}

export default App;

