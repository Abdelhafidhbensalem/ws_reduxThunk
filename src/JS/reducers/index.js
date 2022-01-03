import {combineReducers} from "redux"
import {weatherReducer} from "./weatherReducer"
import xReducer  from "./xReducer"
export const rootReducer=combineReducers({weatherReducer,xReducer})