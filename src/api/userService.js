import { instances } from "./axios";
export const USER_GET_SERVICE = async () => {
    let response = await instances.get("users")
    return response.data
}

export const USER_POST_SERVICE = async (users) => {
    await instances.post("users", users)
}