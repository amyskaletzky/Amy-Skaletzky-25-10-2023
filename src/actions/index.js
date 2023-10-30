import cities from '../cities.json'
import currentWeatherOslo from '../currentweatheroslo.json'
import osloFiveDayForcast from '../osloFiveDayForcast.json'

const API_KEY = process.env.REACT_APP_API_KEY

export const GET_CITIES = 'GET_CITIES'
export const CURRENT_WEATHER = 'CURRENT_WEATHER'
export const GET_LOCATION = 'GET_LOCATION'
export const FIVE_DAY_FORCAST = 'FIVE_DAY_FORCAST'
export const CLEAR_CITIES = "CLEAR_CITIES";


export const autoCompleteCountryWeather = (value) => (dispatch) => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_CITIES,
                // payload: cities
                payload: data
            })
        })
}


export const getCurrentWeather = (cityObj) => (dispatch) => {
    console.log(cityObj.key)
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityObj.key}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: CURRENT_WEATHER,
                // payload: currentWeatherOslo
                payload: data
            })
        })
}

export const getCurrentLocation = (city) => (dispatch) => {
    dispatch({
        type: GET_LOCATION,
        payload: city
    })
}

export const getFiveDayForcast = (cityObj) => (dispatch) => {
    console.log(cityObj.key)
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityObj.key}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FIVE_DAY_FORCAST,
                payload: data //instead of data for now with json file
            })
        })
}


// export const getDefaultWeather = () => (dispatch) => {
//     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${process.env.API_KEY}`)
//         .then(res => res.json())
//         .then(data=>)
// }

export const clearCities = () => {
    return { type: CLEAR_CITIES };
};