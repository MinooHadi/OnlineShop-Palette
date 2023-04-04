import { userInstance } from "../../constant"

export const mainOrderService = (data) => {
    let base = `/orders`
    return userInstance.post(base, data)
}