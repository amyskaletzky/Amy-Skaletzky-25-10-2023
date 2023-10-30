import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const FiveDayForcast = (props) => {
    const fiveDayWeather = useSelector(state => state.five_day_arr)
    // console.log(fiveDayWeather.DailyForecasts)
    // console.log(fiveDayWeather.DailyForecasts[0].Temperature)
    // console.log(fiveDayWeather.DailyForecasts.length)
    const locationObj = useSelector(state => state.location)


    return (
        <>
            <h1>Five Day Forcast</h1>
            <section className="flex justify-evenly">
                {
                    (Object.keys(fiveDayWeather).length !== 0) ?
                        fiveDayWeather.DailyForecasts.map(day => {
                            console.log(day)
                            return (
                                <div className=" max-w-sm  bg-white rounded-xl shadow-2xl shadow-indigo-900 mt-4 w-48 text-indigo-600 h-40 items-center transform transition-all hover:scale-110" >
                                    <p className="mt-12 text-lg">Min: {day.Temperature.Minimum.Value} {day.Temperature.Minimum.Unit}</p>
                                    <p className="mt-12 text-lg">Max: {day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}</p>
                                </div>

                            )
                        })
                        : <></>
                }

            </section>

        </>
    )
}

export default FiveDayForcast;







{/* <div className="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-2xl shadow-indigo-900 mt-4 w-48 text-indigo-600 h-40 items-center transform transition-all hover:scale-110" >
    <p className="text-xl"> {locationObj.city} {locationObj.country} </p>
    <p className="mt-12 text-lg">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
</div > */}