import { WEATHER_LOADING, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from "../constants/actionsTypes"

const initialState = {
    loading: false,
    weather: {},
    error: null
}

export const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case WEATHER_LOADING:
            return { ...state, loading: true }
        case GET_WEATHER_SUCCESS:
            return { ...state, weather: payload, loading: false }
        case GET_WEATHER_FAIL:
            return { ...state, error: payload, loading: false }
        default:
            return state
    }
}