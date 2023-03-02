import { CART_SUCCESS } from "../constants/actionTypes";

const initialState=[];
export const carts = (state=initialState, action)=>{
    switch (action.type) {
        case CART_SUCCESS:
            return [...action.payload]
        default:
            return state;
    }
} 