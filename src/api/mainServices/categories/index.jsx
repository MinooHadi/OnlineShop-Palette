import { instance } from "../../constant";

export const mainCategoriesService = (categoryId) => {
  let base = `/products?_expand=category&_expand=subcategory`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  return instance.get(base);
};
