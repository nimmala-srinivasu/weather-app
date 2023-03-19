import React from 'react';
import moment from 'moment';
import './weather.css'
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload()
}

function WeatherCard(props){
    console.log(props.weatherData);
    const {name, wind, main, sys, weather} = props.weatherData

    return(
        <div className="main">
            <p className="header">{name}</p>
            <Button className='button' inverted color='black' circular icon='refresh' onClick={refresh} />
            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weather[0].main}</p>
            </div>

            <div className="flex">
                <p className="temp">Temprature: <span className='day'>{main.temp} &deg;C</span></p>
                <p className="temp">Feels Like: {main.feels_like} &deg;C</p>
                <p className="temp">Humidity: {main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Wind Speed: {wind.speed} kmph</p>
            </div>
    
        </div>
    )
}

export default WeatherCard