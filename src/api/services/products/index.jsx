import { instance } from "../../constant";

export const productsService = (page, categoryId) => {
  let base = `/products?_expand=category&_expand=subcategory&_page=${page}&_limit=6`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  return instance.get(base);
};