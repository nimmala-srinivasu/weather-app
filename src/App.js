import React, {useState,useEffect} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import WeatherCard from './Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async() =>  {navigator.geolocation.getCurrentPosition((position)=> {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
  })
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
    })
  }
  fetchData()
},[lat,lon])

  return (
    <>
    <div className="App">
      {(typeof data.main != 'undefined') ? (<WeatherCard weatherData={data}/>) : (
        <div>
          <Dimmer active>
            <Loader>Wait bro...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
