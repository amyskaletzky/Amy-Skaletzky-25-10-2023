import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForcast } from "../actions";
import CurrentWeather from "./CurrentWeather";
import FiveDayForcast from "./FiveDaysForcast";

const AutoCompleteSearch = (props) => {
    const cities = useSelector(state => state.cities_array)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(autoCompleteCountryWeather(e.target.value))
    }

    const pickCity = (cityObj) => {
        cityObj = {
            key: cityObj.Key,
            country: cityObj.Country.LocalizedName,
            city: cityObj.LocalizedName
        }
        dispatch(getCurrentWeather(cityObj))
        dispatch(getCurrentLocation(cityObj))
        dispatch(getFiveDayForcast(cityObj))
    }

    return (
        <>
            <input type='text' onChange={(e) => handleChange(e)} />

            <ul>
                {
                    cities.length > 0 ?
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

            <CurrentWeather />
            <FiveDayForcast />
        </>


    )
    // placeholder={country}
}

export default AutoCompleteSearch;