import { GET_CITIES, CURRENT_WEATHER, GET_LOCATION, FIVE_DAY_FORECAST, CLEAR_CITIES, SET_CURRENT_CITY, GET_SUNRISE_SUNSET } from "../actions"

const initState = {
    city: 'Tel Aviv',
    key: 215854,
    cities_array: [],
    obj: {},
    forecast: null,
    location: {},
    five_day_arr: []
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_CITIES:
            return { ...state, cities_array: action.payload }
        case GET_LOCATION:
            return { ...state, location: action.payload }
        case CURRENT_WEATHER:
            return { ...state, cities_array: [], obj: action.payload }
        case FIVE_DAY_FORECAST:
            return { ...state, five_day_arr: action.payload }
        case CLEAR_CITIES:
            return { ...state, cities_array: [] };
        case SET_CURRENT_CITY:
            return { ...state, city: action.payload.city, key: action.payload.key, country: action.payload.country };
        case GET_SUNRISE_SUNSET:
            return { ...state, forecast: action.payload };
        default:
            return { ...state }
    }
}