import { all,takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import *as cartSaga from "./cartSaga";
import * as newArrivalsSaga from "./newArrivalsSaga";

import * as userSaga from "./userSaga";
export const rootSaga = function * (){
    yield all([
        takeLatest(actionTypes.NEWARRIVALS_GET,newArrivalsSaga.NEWARRIVALS_SAGA_GET),
        takeLatest(actionTypes.USER_GET,userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST,userSaga.USER_SAGA_POST),
        takeLatest(actionTypes.NEWARRIVALS_POST,newArrivalsSaga.NEWARRIVALS_SAGA_POST),
        takeLatest(actionTypes.NEWARRIVALS_DELETE,newArrivalsSaga.NEWARRIVALS_SAGA_DELETE),
        takeLatest(actionTypes.NEWARRIVALS_PATCH,newArrivalsSaga.NEWARRIVALS_SAGA_PATCH),
        takeLatest(actionTypes.NEWARRIVALS_SEARCH,newArrivalsSaga.NEWARRIVALS_SAGA_SEARCH),
        takeLatest(actionTypes.NEWARRIVALS_ASC,newArrivalsSaga.NEWARRIVALS_SAGA_ASC),
        takeLatest(actionTypes.NEWARRIVALS_DESC,newArrivalsSaga.NEWARRIVALS_SAGA_DESC),
        takeLatest(actionTypes.NEWARRIVALS_PAGING1,newArrivalsSaga.NEWARRIVALS_SAGA_PAGING1),
        takeLatest(actionTypes.NEWARRIVALS_PAGING2,newArrivalsSaga.NEWARRIVALS_SAGA_PAGING2),
        takeLatest(actionTypes.NEWARRIVALS_PAGING3,newArrivalsSaga.NEWARRIVALS_SAGA_PAGING3),
        takeLatest(actionTypes.CART_POST,cartSaga.CART_SAGA_POST),
        takeLatest(actionTypes.CART_GET,cartSaga.CART_SAGA_GET),
        takeLatest(actionTypes.CART_DELETE,cartSaga.CART_SAGA_DELETE),
        takeLatest(actionTypes.CART_PATCH,cartSaga.CART_SAGA_PATCH)
    ])
}
