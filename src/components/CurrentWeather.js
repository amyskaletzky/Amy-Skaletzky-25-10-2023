import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const CurrentWeather = (props) => {
    const cityCurrentWeather = useSelector(state => state.obj)
    const locationObj = useSelector(state => state.location)
    console.log(cityCurrentWeather)

    return (
        (cityCurrentWeather.length > 0) ?
            <div className="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-2xl shadow-indigo-900 mt-4 w-48 text-indigo-600 h-40 items-center transform transition-all hover:scale-110" >
                <p className="text-xl"> {locationObj.city} {locationObj.country} </p>
                <p className="mt-12 text-lg">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
            </div >
            : <></>
    )
}

export default CurrentWeather;