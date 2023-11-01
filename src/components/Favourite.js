import React, { useState } from 'react';
import { useEffect } from 'react';

export const Favourite = ({ cityName, cityKey }) => {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [currentTemperature, setCurrentTemperature] = useState({ temperature: '', text: '' });
    const fetchCurrentWeather = () => {
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`)
            .then(res => res.json())
            .then(data => {
                setCurrentTemperature({ temperature: data[0].Temperature.Metric.Value, text: data[0].WeatherText });
            })
    }
    useEffect(() => {
        fetchCurrentWeather();
    }, []);
    return (
        <div>
            <p>{cityName} , {currentTemperature?.temperature} , {currentTemperature?.text}</p>
        </div>
    )
}