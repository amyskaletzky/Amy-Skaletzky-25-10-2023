import React, { useState } from 'react';
import { useEffect } from 'react';
import { FavouriteButton } from './FavouriteButton ';
import { toast } from 'react-toastify';

export const Favourite = ({ cityName, cityKey }) => {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [currentTemperature, setCurrentTemperature] = useState({ temperature: '', text: '' });

    const fetchCurrentWeather = () => {
        fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`)
            .then(res => res.json())
            .then(data => {
                setCurrentTemperature({ temperature: data[0].Temperature.Metric.Value, text: data[0].WeatherText, icon: data[0].WeatherIcon });
                console.log(data[0].WeatherIcon)
            })
            .catch((e) => {
                toast.error(e.message)
            })
    }
    useEffect(() => {
        fetchCurrentWeather();
    }, []);
    
    return (
        currentTemperature && currentTemperature.icon ?
            <div className='flex flex-col justify-between items-center  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 h-1/2 w-80 py-8'>
                <FavouriteButton cityKey={cityKey} cityName={cityName} />
                <div className='flex items-start'>

                    <p className='text-4xl lg:text-5xl'>{cityName} </p>
                </div>
                <img src={require('../assets/' + currentTemperature?.icon + '.svg')} className='h-32 w-auto' />
                <div className='flex flex-col gap-6'>
                    <p className='text-3xl lg:text-4xl'>{currentTemperature?.temperature}</p>
                    <p className='text-3xl lg:text-4xl'> {currentTemperature?.text}</p>
                </div>

            </div>
            : <></>
    )
}
