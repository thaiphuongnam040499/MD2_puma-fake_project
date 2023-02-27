
import { NEWARRIVALS_SUCCESS } from "../constants/actionTypes";
const initialState = []
export const newArrivals = (state = initialState, action) => {
    switch (action.type) {
        case NEWARRIVALS_SUCCESS:
            return [...action.payload]
        default:
            return state
    }
}