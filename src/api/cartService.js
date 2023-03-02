import { async } from "@firebase/util"
import { instances } from "./axios"
export const CART_GET_SERVICE = async()=>{
   let response = await instances.get("carts")
    return response.data
}

export const CART_POST_SERVICER = async(cart)=>{
    await instances.post("carts",cart) 
}

export const CART_PATCH_SERVICE = async(cart)=>{
    await instances.patch("carts/"+cart.id,cart)
}
export const CART_DELETE_SERVICE = async(id)=>{
    await instances.delete("carts/"+id)
}
export const CART_GET_SERVICE_ID = async(name)=>{
   let res =  await instances.get("carts?name="+name)
   return res.data
}
export const CART_PATCH_SERVICE_ID = async(id,cart)=>{
    await instances.patch("carts/"+id,cart)
}
