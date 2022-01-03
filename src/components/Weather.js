import React from 'react'
import { useSelector } from 'react-redux'
import "./Weather.css"
const Weather = () => {

    const weather = useSelector(state => state.weatherReducer.weather)
    return (
        <div>
            <div id="weather_wrapper">
                <div className="weatherCard">
                    <div className="currentTemp">
                        <span className="temp">{weather.current&&weather.current.temp_c}°</span>
                        <span className="location">{weather.location&&weather.location.name}</span>
                    </div>
                    <div className="currentWeather">
                        <img src={weather.current&&weather.current.condition&&weather.current.condition.icon} />
                        <div className="info">
                            <span className="rain">1.3 MM</span>
                            <span className="wind">10 MPH</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather
