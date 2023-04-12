import { instance } from "../../constant";

export const ordersService = (page, delivered, searchItem, sortId) => {
  let base = `/orders?_page=${page ?? 1}&_limit=6`;
  if (delivered !== null && delivered !== undefined) {
    base += `&delivered=${delivered}`;
  }
  if (searchItem !== null && searchItem !== undefined) {
    base += `&q=${searchItem}`;
  }
  if (sortId !== null && sortId !== undefined) {
    switch (sortId) {
      case "5":
        base += `&_sort=lastname&_order=asc`;
        break;
      case "6":
        base += `&_sort=createdAt&_order=desc`;
        break;
      case "7":
        base += `&_sort=createdAt&_order=asc`;
        break;
      case "8":
        base += `&_sort=expectAt&_order=desc`;
        break;
      case "9":
        base += `&_sort=expectAt&_order=desc`;
        break;
    }
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
