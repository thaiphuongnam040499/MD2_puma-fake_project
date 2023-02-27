import { call,put } from "redux-saga/effects";
import { USER_GET_SERVICE, USER_POST_SERVICE } from "../api/userService";
import * as actions from "../redux/actions";
import { USER_SUCCESS } from "../redux/constants/actionTypes";


export const USER_SAGA_GET = function*(){
    try {
        let listUser = yield call(USER_GET_SERVICE)
        yield put(actions.act_success_user(USER_SUCCESS,listUser))
    } catch (error) {
        console.log(error);
    }
}
export const USER_SAGA_POST = function*(action){
    console.log("vào đây");
    try {
        
       yield call(USER_POST_SERVICE,action.payload)
       yield USER_SAGA_GET()
    } catch (error) {
        console.log(error);
    }
}