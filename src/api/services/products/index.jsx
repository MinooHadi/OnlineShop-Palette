import { instance } from "../../constant";

export const productsService = (data) => instance.get(`/products?_expand=category&_expand=subcategory&_page=${data}&_limit=6`);