import * as actionTypes from "./constants/actionTypes"
export const act_get_newArrivals = ()=>{
    return {
        type:actionTypes.NEWARRIVALS_GET
    }
}
export const act_success_newArrivals = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_post_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_POST,
        payload: data
    }
}
export const act_patch_newArrivals = (id,data) => {
    return {
        type: actionTypes.NEWARRIVALS_PATCH,
        payload: {id,data}
    }
}
export const act_delete_newArrivals = (id) => {
    return {
        type: actionTypes.NEWARRIVALS_DELETE,
        payload: id
    }
}


export const act_success_user = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_get_user =()=>{
    return{
        type:actionTypes.USER_GET
    }
}
export const act_post_user = (user)=>{
    return {
        type:actionTypes.USER_POST,
        payload:user
    }
}



export const act_get_product = ()=>{
    return {
        type:actionTypes.NEWARRIVALS_GET
    }
}