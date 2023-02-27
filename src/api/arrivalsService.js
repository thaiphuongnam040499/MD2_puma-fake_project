import { instances } from "./axios"
export const NEWARRIVALS_GET_SERVICE = async()=>{
    let response = await instances.get("newArrivals")
    return response.data
}
export const NEWARRIVALS_POST_SERVICE = async(product)=>{
    await instances.post("newArrivals",product)
}
export const NEWARRIVALS_PATCH_SERVICE = async(product)=>{
    await instances.patch("newArrivals"+product.id,product)
}
export const NEWARRIVALS_DELETE_SERVICE = async(id)=>{
    await instances.delete("newArrivals/"+id)
}