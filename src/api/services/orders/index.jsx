import { instance } from "../../constant";

export const ordersService = (page, delivered, searchItem) => {
  let base = `/orders?_page=${page ?? 1}&_limit=6`;
  if (delivered !== null && delivered !== undefined) {
    base += `&delivered=${delivered}`;
  }
  if (searchItem !== null && searchItem !== undefined) {
    base += `&q=${searchItem}`;
  }
  return instance.get(base);
};

export const orderDeliveredService = (id) =>
  instance.patch(
    `/orders/${id}`,
    {
      id: id,
      delivered: "true",
    },
    { headers: { token: localStorage.getItem("token") } }
  );
