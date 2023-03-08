import { instance } from "../../constant";

export const stocksService = (data) =>
  instance.get(
    `/products?_expand=category&_expand=subcategory&quantity_gte=1&_page=${data}&_limit=6`
  );
