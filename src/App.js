import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const searchWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <h1>Current Weather</h1>
      <input
        type="text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={searchWeather}>Search</button>
      <div className='displayData'>
        <ul>
          <li>Description: {weatherData?.weather[0]?.description}</li>
          <li>Temparature: {weatherData?.main?.temp}</li>
          <li>Min Temparature: {weatherData?.main?.temp_min}</li>
          <li>Max Temparature: {weatherData?.main?.temp_max}</li>
          <li>Humidity: {weatherData?.main?.humidity}</li>
          <li>Country: {weatherData?.sys?.country}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
