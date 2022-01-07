import Forecast from "./components/Forecast";
import './index.css';

import React from "react";
import Card from "./components/Card/Card";
import DetailCard from "./components/DetailCard/DetailCard";
import PreviewCard from "./components/PreviewCard/PreviewCard";

function App() {
  if(true){
    return(
      <Forecast />
    )
  } else{
    return(
      <div>
          <Card></Card>
          <div className='future-weather'>
              <PreviewCard></PreviewCard>
              <PreviewCard></PreviewCard>
              <PreviewCard></PreviewCard>
              <PreviewCard></PreviewCard>
              <PreviewCard></PreviewCard>
          </div>
      </div>
    )
  }
}

export default App;

