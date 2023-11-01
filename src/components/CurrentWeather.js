import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";
import beforeFavourited from '../assets/preFavouriteStar.svg';
import favouritedStar from '../assets/favouriteStar.svg';
import uvIndex from '../assets/1.svg';

const CurrentWeather = (props) => {
    const dispatch = useDispatch()
    const key = useSelector(state => state.key)
    const city = useSelector(state => state.city)
    console.log(city)

    useEffect(() => {
        dispatch(getCurrentWeather(key))
        dispatch(getSunriseSunset(key))
    }, [])

    const cityCurrentWeather = useSelector(state => state.obj)
    const locationObj = useSelector(state => state.location)
    const sunForecast = useSelector(state => state.forecast)
    console.log(sunForecast)
    // const dayOfWeek = getDayOfWeek(cityCurrentWeather[0].LocalObservationDateTime)
    // const date = getDateNow(cityCurrentWeather[0].LocalObservationDateTime)

    // const sunset = sunForecast.DailyForecasts[0].Sun.Set
    // const sunrise = sunForecast.DailyForecasts[0].Sun.Rise
    // const humidity = cityCurrentWeather[0].RelativeHumidity + '%'

    // const weather = cityCurrentWeather[0].WeatherText
    // const weatherIconNum = cityCurrentWeather[0].WeatherIcon
    // const windSpeed = cityCurrentWeather[0].Wind.Speed.Metric.Value + ' ' + cityCurrentWeather[0].Wind.Speed.Metric.Unit

    // const uvIndex = cityCurrentWeather[0].UVIndex
    // const uvIndexDesc = cityCurrentWeather[0].UVIndexText

    // DELETE THE CONSOLE.LOGS!!
    // if (cityCurrentWeather && sunForecast) {
    //     console.log('forecast:', sunForecast)
    // console.log('sunrise:', getTime(sunForecast.DailyForecasts[0].Sun.Set))
    // console.log('sunrise:', getTime(sunForecast.DailyForecasts[0].Sun.Rise))
    //     console.log('get day of week:', getDayOfWeek(cityCurrentWeather[0].LocalObservationDateTime))
    //     console.log('get date:', getDateNow(cityCurrentWeather[0].LocalObservationDateTime))
    //     console.log('humidity:', cityCurrentWeather[0].RelativeHumidity + '%')
    //     console.log('weather:', cityCurrentWeather[0].WeatherText)
    //     console.log('icon num weather:', cityCurrentWeather[0].WeatherIcon)
    //     console.log('wind speed:', cityCurrentWeather[0].Wind.Speed.Metric.Value + ' ' + cityCurrentWeather[0].Wind.Speed.Metric.Unit)
    //     console.log('UV Index:', cityCurrentWeather[0].UVIndex)
    //     console.log('UV Index Text:', cityCurrentWeather[0].UVIndexText)
    //     console.log('UV Index Text:', cityCurrentWeather[0].UVIndexText)
    // }


    return (
        (cityCurrentWeather?.length > 0 && sunForecast) ?
            <div className="flex h-1/2 gap-4" >
                <div className="flex w-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-white border-opacity-60 justify-between">
                    <div className="flex flex-col gap-4 px-8 py-2 text-left">
                        <img src={beforeFavourited} className="w-10 " />
                        <img src={require('../assets/' + cityCurrentWeather[0].WeatherIcon + '.svg')} className="w-28" />
                        <div className="flex flex-col gap-4">
                            <p className="text-6xl">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
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
                <div className="flex flex-col h-full bg-white w-1/2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-white border-opacity-60 gap-8">
                    <div className="flex justify-between px-4 py-2">
                        <div className="flex flex-col items-center">
                            <p className="text-3xl">UV-Index</p>
                            <img src={uvIndex} className="w-20" />
                            <p className="text-3xl">{cityCurrentWeather[0].UVIndex} - {cityCurrentWeather[0].UVIndexText}</p>
                        </div>
                        
                        <div className="flex flex-col justify-center gap-4">
                            <p className="text-3xl">Wind Speed</p>
                            <p className="text-2xl">{cityCurrentWeather[0].Wind.Speed.Metric.Value + ' ' + cityCurrentWeather[0].Wind.Speed.Metric.Unit}</p>
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                            <p className="text-3xl">Humidity</p>
                            <p className="text-2xl">{cityCurrentWeather[0].RelativeHumidity + '%'}</p>
                        </div>

                    </div>
                    <div className="flex">
                        <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Set)}</p>
                        <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Rise)}</p>
                    </div>
                </div>
            </div>
            : <></>
    )
}

export default CurrentWeather;