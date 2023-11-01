import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";
import beforeFavourited from '../assets/preFavouriteStar.svg'
import favouritedStar from '../assets/favouriteStar.svg'

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
                <div className="flex w-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-60 justify-between">
                    <div className="flex flex-col gap-4 px-8 py-1">
                        <img src={beforeFavourited} className="w-10 " />
                        <img src={require('../assets/' + cityCurrentWeather[0].WeatherIcon + '.svg')} className="w-32 self-center" />
                        <div className="flex flex-col gap-4">
                            <p className="text-5xl">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
                            <p className="text-4xl">{cityCurrentWeather[0].WeatherText}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-4xl">{city}</p>
                        <div>
                            <p className="text-3xl">{getTime(cityCurrentWeather[0].EpochTime)}</p>
                            <p className="text-3xl">{getDayOfWeek(cityCurrentWeather[0].EpochTime)}</p>
                            <p className="text-3xl">{getDateNow(cityCurrentWeather[0].EpochTime)}</p>
                        </div>
                    </div>
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