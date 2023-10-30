import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForcast, clearCities } from "../actions";


const CurrentWeather = (props) => {
    const dispatch = useDispatch()


    useEffect(() => {
        const cityObj = {
            key: 215854,
            country: "Israel",
            city: 'Tel Aviv'
        }
        dispatch(getCurrentWeather(cityObj))
    }, [])
    const cityCurrentWeather = useSelector(state => state.obj)
    const locationObj = useSelector(state => state.location)

    return (
        (cityCurrentWeather.length > 0) ?
            <div className="flex h-1/2 gap-4" >
                <div className=" w-1/2 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                    <p className="text-xl"> {locationObj.city} {locationObj.country} </p>
                    <p className="mt-12 text-lg">{cityCurrentWeather[0].Temperature.Metric.Value} {cityCurrentWeather[0].Temperature.Metric.Unit}</p>
                </div>
                <div className=" h-full bg-gray-800 w-1/2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                    <h1>hi</h1>
                </div>
            </div>
            : <></>
    )
}

export default CurrentWeather;