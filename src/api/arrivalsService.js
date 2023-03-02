import { instances } from "./axios"
export const NEWARRIVALS_GET_SERVICE = async () => {
    let response = await instances.get("newArrivals")
    return response.data
}
export const NEWARRIVALS_POST_SERVICE = async (product) => {
    await instances.post("newArrivals", product)
}
export const NEWARRIVALS_PATCH_SERVICE = async (product) => {
    await instances.patch("newArrivals/" + product.id, product)
}
export const NEWARRIVALS_DELETE_SERVICE = async (id) => {
    await instances.delete("newArrivals/" + id)
}
export const NEWARRIVALS_SEARCH_SERVICE = async (search) => {
    let response = await instances.get("newArrivals?name_like=" + search)
    return response.data
}
export const NEWARRIVALS_ASC_SERVICE = async () => {
    let response = await instances.get("newArrivals?_sort=price&_order=asc" )
    return response.data
}
export const NEWARRIVALS_DESC_SERVICE = async () => {
    let response = await instances.get("newArrivals?_sort=price&_order=desc")
    return response.data
}
export const NEWARRIVALS_PAGING1_SERVICE = async () => {
    let response = await instances.get("newArrivals?_start=0&_end=8")
    return response.data
}
export const NEWARRIVALS_PAGING2_SERVICE = async () => {
    let response = await instances.get("newArrivals?_start=8&_end=16")
    return response.data
}
export const NEWARRIVALS_PAGING3_SERVICE = async () => {
    let response = await instances.get("newArrivals?_start=16&_end=24")
    return response.data
}
