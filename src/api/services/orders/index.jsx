import { instance } from "../../constant";

export const ordersService = (page, delivered) => {
    let base = `/orders?_page=${page??1}&_limit=6`;
    if(delivered !== null && delivered !== undefined){
        base += `&delivered=${delivered}`;
    }
    return instance.get(base)
}