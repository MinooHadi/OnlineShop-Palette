import { instance } from "../../constant";

export const mainSubcategoriesService = (subcategoryId) => {
  let base = `/products?_expand=category&_expand=subcategory`;
  if (subcategoryId !== null && subcategoryId !== undefined) {
    base += `&subcategoryId=${subcategoryId}`;
  }
  return instance.get(base);
};
