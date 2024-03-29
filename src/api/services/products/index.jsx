import axios from "axios";
import { instance, toFormData } from "../../constant";

export const productsService = (page, categoryId, searchItem, sortId) => {
  let base = `/products?_expand=category&_expand=subcategory&_page=${page}&_limit=6`;
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
        break;
    }
  }
  return instance.get(base);
};

export const productsCreateService = (data) =>
  instance.post(
    "/products",
    { ...data },
    { headers: { token: localStorage.getItem("token") } }
  );

export const uploadImages = (data) => {
  const formData = data.map((item) => {
    const fData = new FormData();
    fData.append("image", item);
    return fData;
  });
  let promises = [];
  for (let fD of formData) {
    promises.push(
      instance.post("/upload", fD, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    );
  }
  return Promise.all(promises);
};

export const productsEditService = (id, data) =>
  instance.patch(
    `/products/${id}`,
    {
      ...data,
      id: id,
    },
    { headers: { token: localStorage.getItem("token") } }
  );

export const productsDeleteService = (id) =>
  instance.delete(`/products/${id}`, {
    headers: { token: localStorage.getItem("token") },
  });
