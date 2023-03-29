import { instance } from "../../constant";

export const mainSubcategoriesService = (page, subcategoryId) => {
  let base = `/products?_expand=category&_expand=subcategory&_page=${page}&_limit=3`;
  if (subcategoryId !== null && subcategoryId !== undefined) {
    base += `&subcategoryId=${subcategoryId}`;
  }
  return instance.get(base);
};
