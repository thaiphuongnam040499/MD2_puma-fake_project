import { combineReducers } from "redux";
import { newArrivals } from "./newArrivals";
import { users } from "./user";

export const rootReducer = combineReducers({newArrivals,users})