import { instance } from "../../constant";

export const productsService = () => instance.get("/products?_expend=category&_expend=subcategory");