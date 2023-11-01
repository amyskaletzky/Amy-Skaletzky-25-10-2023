import cities from '../cities.json'
import currentWeatherOslo from '../currentweatheroslo.json'
import osloFiveDayForcast from '../osloFiveDayForcast.json'
import { toast } from 'react-toastify';
import { useRef } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY

export const GET_CITIES = 'GET_CITIES'
export const CURRENT_WEATHER = 'CURRENT_WEATHER'
export const GET_LOCATION = 'GET_LOCATION'
export const FIVE_DAY_FORECAST = 'FIVE_DAY_FORECAST'
export const CLEAR_CITIES = "CLEAR_CITIES";
export const SET_CURRENT_CITY = "SET_CURRENT_CITY";
export const GET_SUNRISE_SUNSET = "GET_SUNRISE_SUNSET"

export const autoCompleteCountryWeather = (value) => (dispatch) => {
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json()
        }
        )
        .then(data => {
            dispatch({
                type: GET_CITIES,
                payload: data
            })
        })
        .catch((error) => {
            toast.error(error.message);
        });
}


export const getCurrentWeather = (key) => (dispatch) => {
    let loadingCurrentWeatherToast;
    loadingCurrentWeatherToast = toast.loading('fetching current weather...');
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}&details=true`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json()
        }
        )
        .then(data => {
            toast.dismiss(loadingCurrentWeatherToast);
            toast('loaded current weather successfully');
            dispatch({
                type: CURRENT_WEATHER,
                payload: data
            })
        }).catch((error) => {
            toast.dismiss(loadingCurrentWeatherToast);
            toast.error(error.message)
        });
}

export const getCurrentLocation = (city) => (dispatch) => {
    dispatch({
        type: GET_LOCATION,
        payload: city
    })
}

export const getFiveDayForecast = (key) => (dispatch) => {
    let loadingFiveDayForecastToast;
    loadingFiveDayForecastToast = toast.loading('fetching weather forecast...');
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json()
        }
        )
        .then(data => {
            toast.dismiss(loadingFiveDayForecastToast);
            toast('loaded forecast successfully');
            dispatch({
                type: FIVE_DAY_FORECAST,
                payload: data
            })
        }).catch((error) => {
            toast.dismiss(loadingFiveDayForecastToast);
            toast.error(error.message);
        });
}



export const clearCities = () => {
    return { type: CLEAR_CITIES };
};

export const setCurrentCity = (data) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_CITY,
        payload: data
    })
};

export const getSunriseSunset = (key) => (dispatch) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${API_KEY}&details=true`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json()
        }
        )
        .then(data => {
            dispatch({
                type: GET_SUNRISE_SUNSET,
                payload: data
            })
        }).catch((error) => {
            toast.error(error.message);
        });
}