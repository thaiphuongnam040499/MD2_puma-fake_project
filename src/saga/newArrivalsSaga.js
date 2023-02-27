import { call,put } from "redux-saga/effects";
import * as arrivalsService from "../api/arrivalsService";
import { USER_GET_SERVICE, USER_POST_SERVICE } from "../api/userService";
import * as actions from "../redux/actions";
import { NEWARRIVALS_GET, NEWARRIVALS_SUCCESS, USER_SUCCESS } from "../redux/constants/actionTypes";
export const NEWARRIVALS_SAGA_GET = function*(){
    try {
       let listNewArrivals = yield call(arrivalsService.NEWARRIVALS_GET_SERVICE) 
       yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_POST = function*(action){
    try {
        yield call(arrivalsService.NEWARRIVALS_POST_SERVICE,action.payload)
        yield NEWARRIVALS_SAGA_GET()
    } catch (error) {
        
    }
}
export const NEWARRIVALS_SAGA_DELETE = function*(action){
    try {
        yield call(arrivalsService.NEWARRIVALS_DELETE_SERVICE,action.payload)
        yield NEWARRIVALS_SAGA_GET()
    } catch (error) {
        
    }
}