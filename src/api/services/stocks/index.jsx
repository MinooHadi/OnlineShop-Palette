import { instance } from "../../constant";

export const stocksService = (page, categoryId, searchItem) => {
  let base = `/products?_expand=category&_expand=subcategory&quantity_gte=1&_page=${page}&_limit=6`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  if (searchItem !== null && searchItem !== undefined) {
    base += `&name_like=${searchItem}`;
  }
  return instance.get(base);
};

export const stocksEditService = (data) => {
  return instance.patch(`/products/${data.id}`, data, {
    headers: { token: localStorage.getItem("token") },
  });
};
