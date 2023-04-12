import { instance } from "../../constant";

export const stocksService = (page, categoryId, searchItem, sortId) => {
  let base = `/products?_expand=category&_expand=subcategory&quantity_gte=1&_page=${page}&_limit=6`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  if (searchItem !== null && searchItem !== undefined) {
    base += `&name_like=${searchItem}`;
  }
  if (sortId !== null && sortId !== undefined) {
    switch (sortId) {
      case "1":
        base += `&_sort=price&_order=desc`;
        break;
      case "2":
        base += `&_sort=price&_order=asc`;
        break;
      case "3":
        base += `&_sort=quantity&_order=desc`;
        break;
      case "4":
        base += `&_sort=quantity&_order=asc`;
        break;
      case "5":
        base += `&_sort=name&_order=asc`;
    }
  }
  return instance.get(base);
};

export const stocksEditService = (data) => {
  return instance.patch(`/products/${data.id}`, data, {
    headers: { token: localStorage.getItem("token") },
  });
};
