import { GET_CITIES, CURRENT_WEATHER, GET_LOCATION, FIVE_DAY_FORCAST, CLEAR_CITIES } from "../actions"
const initState = {
    city: 'Tel Aviv',
    cities_array: [],
    obj: {},
    location: {},
    five_day_arr: []
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_CITIES:
            return { ...state, cities_array: action.payload }
        case GET_LOCATION:
            console.log(action.payload);
            return { ...state, location: action.payload }
        case CURRENT_WEATHER:
            console.log('current-weather-reducers:', action.payload)
            return { ...state, cities_array: [], obj: action.payload }
        case FIVE_DAY_FORCAST:
            console.log('five-day-reducers:', action.payload)
            return { ...state, five_day_arr: action.payload }
        case CLEAR_CITIES:
            return { ...state, cities_array: [] };
        default:
            return { ...state }
    }
}