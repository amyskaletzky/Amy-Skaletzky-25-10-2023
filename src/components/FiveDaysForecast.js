import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const FiveDayForecast = (props) => {
    const dispatch = useDispatch()
    const key = useSelector(state => state.key)
    const city = useSelector(state => state.city)
    const locationObj = useSelector(state => state.location)
    useEffect(() => {
        dispatch(getFiveDayForecast(key))
    }, [key])
    const fiveDayWeather = useSelector(state => state.five_day_arr)

    return (
        <div id="bottom" className="h-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 flex flex-col justify-center">
            <section className="flex lg:flex-row flex-col justify-evenly">
                {
                    (Object.keys(fiveDayWeather).length !== 0) ?
                        fiveDayWeather.DailyForecasts.map(day => {
                            return (
                                <>
                                    <div className=" h-full w-full flex flex-col gap-4" >
                                        <img src={require('../assets/' + day.Day.Icon + '.svg')} className="h-16 lg:h-24 w-auto" alt='forecast icon' />
                                        <div>
                                            <p className="text-md lg:text-2xl">{getDayOfWeek(day.Date)}</p>
                                            <p className="text-md lg:text-2xl">{getDateNow(day.Date)}</p>

                                        </div>
                                        <p className="text-lg lg:text-3xl">{day.Temperature.Maximum.Value}°{day.Temperature.Maximum.Unit}</p>
                                    </div>
                                    <div className="border-b lg:border-l border-gray-500 border-opacity-40 h-full last:border-b-0 last:border-l-0"></div>

                                </>

                            )
                        })
                        : <></>
                }

            </section>
        </div>


    )
}

export default FiveDayForecast;