import { all,takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as newArrivalsSaga from "./newArrivalsSaga";
import * as userSaga from "./userSaga";
export const rootSaga = function * (){
    yield all([
        takeLatest(actionTypes.NEWARRIVALS_GET,newArrivalsSaga.NEWARRIVALS_SAGA_GET),
        takeLatest(actionTypes.USER_GET,userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST,userSaga.USER_SAGA_POST),
        takeLatest(actionTypes.NEWARRIVALS_POST,newArrivalsSaga.NEWARRIVALS_SAGA_POST),
        takeLatest(actionTypes.NEWARRIVALS_DELETE,newArrivalsSaga.NEWARRIVALS_SAGA_DELETE)
    ])
}
