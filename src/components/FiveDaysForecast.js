import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, getSunriseSunset } from "../actions";
import { getDayOfWeek, getDateNow, getTime } from "../helpers/dayDate";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const FiveDayForecast = (props) => {
    const dispatch = useDispatch()
    const key = useSelector(state => state.key)
    const city = useSelector(state => state.city)
    // console.log(fiveDayWeather.DailyForecasts)
    // console.log(fiveDayWeather.DailyForecasts[0].Temperature)
    // console.log(fiveDayWeather.DailyForecasts.length)
    const locationObj = useSelector(state => state.location)
    useEffect(() => {
        dispatch(getFiveDayForecast(key))
    }, [key])
    const fiveDayWeather = useSelector(state => state.five_day_arr)
    console.log(fiveDayWeather)

    return (
        <div id="bottom" className="h-1/2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 flex flex-col justify-center">
            <section className="flex justify-evenly">
                {
                    (Object.keys(fiveDayWeather).length !== 0) ?
                        fiveDayWeather.DailyForecasts.map(day => {
                            console.log(day)
                            return (
                                <>
                                    <div className=" h-full w-full flex flex-col gap-4" >
                                        <img src={require('../assets/' + day.Day.Icon + '.svg')} className="h-24 w-auto" />
                                        <div>
                                            <p className="text-2xl">{getDayOfWeek(day.Date)}</p>
                                            <p className="text-2xl">{getDateNow(day.Date)}</p>

                                        </div>
                                        <p className="text-4xl">{day.Temperature.Maximum.Value}°{day.Temperature.Maximum.Unit}</p>
                                    </div>
                                    <div className="border-l border-gray-500 border-opacity-40 h-full last:border-l-0"></div>

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







{/* <div className="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-2xl shadow-indigo-900 mt-4 w-48 text-indigo-600 h-40 items-center transform transition-all hover:scale-110" >
    <p className="text-xl"> {locationObj.city} {locationObj.country} </p>
    <p className="mt-12 text-lg">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
</div > */}