import { WEATHER_LOADING, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from "../constants/actionsTypes"
import axios from "axios"

export const getWeather = (query) => async dispatch => {
    dispatch({ type: WEATHER_LOADING })
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9433e96081b344ad9fe205134210109 &q=${query}&days=4&aqi=no&alerts=yes`)
        console.log(response)
        dispatch({ type: GET_WEATHER_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_WEATHER_FAIL, payload: error })
    }
}