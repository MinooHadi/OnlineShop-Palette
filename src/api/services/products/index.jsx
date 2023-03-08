import { instance } from "../../constant";

export const productsService = () => instance.get("/products?_expand=category&_expand=subcategory");