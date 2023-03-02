import { call,put } from "redux-saga/effects";
import * as arrivalsService from "../api/arrivalsService";
import * as actions from "../redux/actions";
import {NEWARRIVALS_SUCCESS} from "../redux/constants/actionTypes";
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
export const NEWARRIVALS_SAGA_PATCH = function*(action){
    try {
        yield call(arrivalsService.NEWARRIVALS_PATCH_SERVICE,action.payload)
        yield NEWARRIVALS_SAGA_GET()
    } catch (error) {
        
    }
}
export const NEWARRIVALS_SAGA_SEARCH = function*(action){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_SEARCH_SERVICE,action.payload)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_ASC = function*(){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_ASC_SERVICE)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_DESC = function*(){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_DESC_SERVICE)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_PAGING1 = function*(){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_PAGING1_SERVICE)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_PAGING2 = function*(){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_PAGING2_SERVICE)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}
export const NEWARRIVALS_SAGA_PAGING3 = function*(){
    try {
       let listNewArrivals= yield call(arrivalsService.NEWARRIVALS_PAGING3_SERVICE)
        yield put(actions.act_success_newArrivals(NEWARRIVALS_SUCCESS,listNewArrivals)) 
    } catch (error) {
        console.log(error);
    }
}