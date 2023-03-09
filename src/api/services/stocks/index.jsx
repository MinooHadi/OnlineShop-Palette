import { instance } from "../../constant";

export const stocksService = (page, categoryId) => {
  let base = `/products?_expand=category&_expand=subcategory&quantity_gte=1&_page=${page}&_limit=6`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  return instance.get(base);
};