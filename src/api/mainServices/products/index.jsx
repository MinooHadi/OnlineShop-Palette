import { userInstance } from "../../constant";

export const mainProductDetailService = (id) => {
  let base = `/products?_expand=category&_expand=subcategory`;
  if (id !== null && id !== undefined) {
    base += `&id=${id}`;
  }
  return userInstance.get(base);
};

