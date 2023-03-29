import { instance } from "../../constant";

export const mainProductDetailService = (id) => {
  let base = `/products`;
  if (id !== null && id !== undefined) {
    base += `?id=${id}`;
  }
  return instance.get(base);
};
