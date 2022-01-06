import MainView from "./components/MainView/MainView";
import Search from './components/Search/Search';
import './index.css';

const axios = require("axios").default;

// function getWeather(){
//   const options = {
//     method: 'GET',
//     url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//     params: {
//       q: 'Calgary, Canada',
//       lat: '0',
//       lon: '0',
//       callback: 'test',
//       id: '2172797',
//       lang: 'null',
//       units: 'imperial',
//       mode: 'xml'
//     },
//     headers: {
//       'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//       'x-rapidapi-key': 'bffda05d02msh1d882321d286f4dp1b823cjsn27d7262d792b'
//     }
//   };

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

function App() {

  // will need react router?
  return (
    <div className="App">
      <Search></Search>
      <MainView></MainView>
    </div>
  );
}

export default App;

