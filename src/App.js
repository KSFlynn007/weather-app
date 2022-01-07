import Forecast from "./components/Forecast";
import './index.css';

import React from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import DetailCard from "./components/DetailCard/DetailCard";
import PreviewCard from "./components/PreviewCard/PreviewCard";

function App() {
  if(true){
    return(
      <>
        <Forecast />
        {/* <DetailCard></DetailCard> */}
      </>
    )
  } else{
    return(
      <div>
          <Search></Search>
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

