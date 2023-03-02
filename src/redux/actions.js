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
export const act_patch_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_PATCH,
        payload: data
    }
}
export const act_delete_newArrivals = (id) => {
    return {
        type: actionTypes.NEWARRIVALS_DELETE,
        payload: id
    }
}
export const act_search_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_SEARCH,
        payload: data
    }
}
export const act_asc_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_ASC,
        payload: data
    }
}
export const act_desc_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_DESC,
        payload: data
    }
}
export const act_paging1_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_PAGING1,
        payload: data
    }
}
export const act_paging2_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_PAGING2,
        payload: data
    }
}
export const act_paging3_newArrivals = (data) => {
    return {
        type: actionTypes.NEWARRIVALS_PAGING3,
        payload: data
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



export const act_get_cart = () =>{
    return{
        type:actionTypes.CART_GET
    }
}


export const act_post_cart=(userid,product)=>{
    return {
        type:actionTypes.CART_POST,
        payload:{
            ...product,
            quantity:1,
            userid
        }
    }
}

export const act_success_cart=(actionType,data)=>{
    return{
        type:actionTypes.CART_SUCCESS,
        payload:data
    }
}

export const act_delete_cart=(id)=>{
    return{
        type:actionTypes.CART_DELETE,
        payload:id
    }
}
export const act_patch_cart=(data)=>{
    return{
        type:actionTypes.CART_PATCH,
        payload:data
    }
}



