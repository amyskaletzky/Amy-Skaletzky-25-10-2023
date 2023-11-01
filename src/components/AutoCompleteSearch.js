import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, setCurrentCity } from "../actions";
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDaysForecast";
import searchIcon from "../assets/search-icon.svg"


const AutoCompleteSearch = (props) => {
    const cities = useSelector(state => state.cities_array)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.target.value.length > 0 ? dispatch(autoCompleteCountryWeather(e.target.value)) : dispatch(clearCities());
    }

    const pickCity = (cityObject) => {
        const cityObj = {
            key: cityObject.Key,
            country: cityObject.Country.LocalizedName,
            city: cityObject.LocalizedName
        }
        dispatch(getCurrentWeather(cityObj.key))
        dispatch(getCurrentLocation(cityObj.key))
        dispatch(getFiveDayForecast(cityObj.key))
        dispatch(setCurrentCity(cityObj))
    }


    return (
        <div className="flex flex-col w-3/5 relative">
            <div className="flex w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-white border-opacity-25">
                <input type='text' onChange={(e) => handleChange(e)} className="bg-white bg-opacity-0 w-full" />
                <img src={searchIcon} className="w-10 invert ml-auto" />
            </div>
            <div className="absolute top-8">
                <ul>
                    {
                        cities?.length > 0 ?
                            cities.map((city, i) => {
                                return (
                                    <li key={i} onClick={() => pickCity(city)}>
                                        {city.LocalizedName}
                                        {city.key}
                                    </li>
                                )
                            }) : <></>
                    }
                </ul>
            </div>
        </div>
    )
}

export default AutoCompleteSearch;