import { userInstance } from "../../constant";

export const mainSubcategoriesService = (page, subcategoryId, sortId) => {
  let base = `/products?_expand=category&_expand=subcategory&_page=${page}&_limit=3`;
  if (subcategoryId !== null && subcategoryId !== undefined) {
    base += `&subcategoryId=${subcategoryId}`;
  }
  if (sortId !== null && sortId !== undefined) {
    switch (sortId) {
      case "1":
        base += `&_sort=name&_order=asc`;
        break;
      case "2":
        base += `&_sort=price&_order=asc`;
        break;
      case "3":
        base += `&_sort=price&_order=desc`;
        break;
      case "4":
        base += `&_sort=quantity&_order=asc`;
        break;
      case "5":
        base += `&_sort=name&_order=asc`;
        break;
    }
  }
  return userInstance.get(base);
};
