import { userInstance } from "../../constant";

export const searchProductService = (searchItem) => {
  let base = `/products?_expand=category&_expand=subcategory&name_like=${searchItem}`;
  return userInstance.get(base);
};
