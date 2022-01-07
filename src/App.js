import Forecast from "./components/Forecast";
import MainView from "./components/MainView/MainView";
import './index.css';


function App() {
  return (
    <div className="App">
      {/* <MainView></MainView> */}
      <h1>React Weather</h1>
      <Forecast />
    </div>
  );
}

export default App;

