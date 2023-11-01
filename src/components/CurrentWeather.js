import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";


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
                <div className=" w-1/2 bg-gray-800 rounded- md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                    <p className="text-xl">{city}</p>
                    <p className="text-xl">{getDayOfWeek(cityCurrentWeather[0].LocalObservationDateTime)}</p>
                    <p className="text-xl">{getDateNow(cityCurrentWeather[0].LocalObservationDateTime)}</p>
                    <p className="mt-12 text-lg">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
                </div>
                <div className=" h-full bg-gray-800 w-1/2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                    <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Set)}</p>
                    <p className="text-xl">{getTime(sunForecast.DailyForecasts[0].Sun.Rise)}</p>
                    <p className="text-xl">{cityCurrentWeather[0].RelativeHumidity + '%'}</p>
                </div>
            </div>
            : <></>
    )
}

export default CurrentWeather;