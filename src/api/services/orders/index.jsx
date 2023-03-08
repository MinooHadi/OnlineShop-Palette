import { instance } from "../../constant";

export const ordersService = (data) => instance.get(`/orders?_page=${data}&_limit=6`);