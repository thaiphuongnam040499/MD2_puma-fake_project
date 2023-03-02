import { call, put } from "redux-saga/effects";
import * as cartService from "../api/cartService";
import { act_success_cart} from "../redux/actions";
import * as actionTypes from "../redux/constants/actionTypes";

export const CART_SAGA_GET = function* () {
    try {
        let cart = yield call(cartService.CART_GET_SERVICE)
        yield put(act_success_cart(actionTypes.CART_SUCCESS, cart))
    } catch (error) {
        console.log(error);
    }
}

export const CART_SAGA_POST = function* (action) {
    try {
        yield call(cartService.CART_POST_SERVICER, action.payload)
        yield CART_SAGA_GET()
    } catch (error) {
        let user = yield call(cartService.CART_GET_SERVICE_ID, action.payload.name)
        yield call(cartService.CART_PATCH_SERVICE_ID, user[0].id, { quantity: user[0].quantity + 1 })
        yield CART_SAGA_GET()
    }
}

export const CART_SAGA_DELETE = function* (action) {
    try {
        yield call(cartService.CART_DELETE_SERVICE, action.payload)
        yield CART_SAGA_GET()
    } catch (error) {
        console.log(error);
    }
}
export const CART_SAGA_PATCH = function* (action) {
    try {
        yield call(cartService.CART_PATCH_SERVICE, action.payload)
        yield CART_SAGA_GET()
    } catch (error) {
        console.log(error);
    }
}

