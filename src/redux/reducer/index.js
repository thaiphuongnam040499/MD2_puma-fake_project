import { combineReducers } from "redux";
import { carts } from "./cart";
import { newArrivals } from "./newArrivals";
import { users } from "./user";

export const rootReducer = combineReducers({newArrivals,users,carts})