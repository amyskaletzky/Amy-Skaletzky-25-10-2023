import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { autoCompleteCountryWeather, getCurrentWeather, getCurrentLocation, getFiveDayForecast, clearCities, setCurrentCity } from "../actions";
import searchIcon from "../assets/search-icon.svg"


const AutoCompleteSearch = (props) => {
    const cities = useSelector(state => state.cities_array)
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();

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

        if (location.pathname === '/favourites') {
            navigate('/', { state: { cityName: cityObj.city, cityKey: cityObj.key } });
        }
    }


    return (
        <div className="flex flex-col w-3/5 relative">
            <div className="flex w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50">
                <input type='text' onChange={(e) => handleChange(e)} className="bg-white bg-opacity-0 w-full " />
                <img src={searchIcon} className="w-10 ml-auto hover:cursor-pointer" />
            </div>
            {cities?.length > 0 ?
                <div className="absolute top-10 z-40 w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25 border border-white border-opacity-50 ">
                    <ul>
                        {
                            cities.map((city, i) => {
                                console.log(city)
                                return (
                                    <>
                                        <li key={i} className="text-xl py-4 hover:cursor-pointer" onClick={() => pickCity(city)}>
                                            {city.LocalizedName}, {city.Country.LocalizedName}
                                            {city.key}
                                        </li>
                                        <div className="border-t border-gray-500 border-opacity-40 w-11/12 mx-auto last:border-t-0"></div>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div> : <></>}
        </div>
    )
}

export default AutoCompleteSearch;