import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";
import beforeFavourited from '../assets/preFavouriteStar.svg';
import favouritedStar from '../assets/favouriteStar.svg';
import uvIndex from '../assets/1.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';
import { FavouriteButton } from "./FavouriteButton ";


const CurrentWeather = (props) => {
    const dispatch = useDispatch()
    const key = useSelector(state => state.key)
    const city = useSelector(state => state.city)

    useEffect(() => {
        dispatch(getCurrentWeather(key))
        dispatch(getSunriseSunset(key))
    }, [])

    const locationObj = useSelector(state => state.location)
    const cityCurrentWeather = useSelector(state => state.obj)
    const sunForecast = useSelector(state => state.forecast)

    return (
        (cityCurrentWeather?.length > 0 && sunForecast) ?
            <div className="flex h-1/2 gap-4" >
                <div className="flex w-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-white border-opacity-60 justify-between">
                    <div className="flex flex-col justify-around gap-4 px-8 py-2 text-left">
                        <FavouriteButton cityKey={key} cityName={city} />
                        <img src={require('../assets/' + cityCurrentWeather[0].WeatherIcon + '.svg')} className="w-32" />
                        <div className="flex flex-col gap-4">
                            <p className="text-6xl">{cityCurrentWeather[0].Temperature.Metric.Value}°{cityCurrentWeather[0].Temperature.Metric.Unit}</p>
                            <p className="text-5xl">{cityCurrentWeather[0].WeatherText}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between text-right pr-4 py-2">
                        <p className="text-5xl">{city}</p>
                        <div className="flex flex-col">
                            <p className="text-4xl">{getTime(cityCurrentWeather[0].LocalObservationDateTime)}</p>
                            <p className="text-4xl">{getDayOfWeek(cityCurrentWeather[0].LocalObservationDateTime)}</p>
                            <p className="text-4xl">{getDateNow(cityCurrentWeather[0].LocalObservationDateTime)}</p>
                        </div>
                    </div>
                </div>
                <div id="extra-info" className="flex flex-col h-full bg-white w-1/2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-white border-opacity-60">
                    <div className="flex justify-between px-8 py-2 h-1/2">
                        <div className="flex flex-col items-center justify-center ">
                            <p className="text-3xl">UV-Index</p>
                            <img src={uvIndex} className="w-12" />
                            <p className="text-2xl">{cityCurrentWeather[0].UVIndex} - {cityCurrentWeather[0].UVIndexText}</p>
                        </div>
                        <div className="border-l border-gray-500 border-opacity-40 h-full flex"></div>
                        <div className="flex flex-col justify-center  gap-4">
                            <p className="text-3xl">Wind Speed</p>
                            <p className="text-2xl">{cityCurrentWeather[0].Wind.Speed.Metric.Value + ' ' + cityCurrentWeather[0].Wind.Speed.Metric.Unit}</p>
                        </div>
                        <div className="border-l border-gray-500 border-opacity-40 h-full"></div>

                        <div className="flex flex-col justify-center items-center gap-4 ">
                            <p className="text-3xl">Humidity</p>
                            <p className="text-2xl">{cityCurrentWeather[0].RelativeHumidity + '%'}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-500 border-opacity-40 w-11/12 mx-auto"></div>
                    <div className="flex h-1/2 items-center justify-center gap-7">
                        <div>
                            <img src={sunrise} className="w-20" />
                            <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Set)}</p>
                        </div>
                        <div className="border-t border-gray-500 border-opacity-40 w-1/3 "></div>
                        <div>
                            <img src={sunset} className="w-20" />
                            <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Rise)}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <></>
    )
}

export default CurrentWeather;