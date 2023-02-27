import { USER_SUCCESS } from "../constants/actionTypes";

const initialState = [];
export const users = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            console.log(action.payload);
            return [...action.payload]
        default:
            return state
    }
}
