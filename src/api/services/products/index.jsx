import axios from "axios";
import { instance, toFormData } from "../../constant";

export const productsService = (page, categoryId) => {
  let base = `/products?_expand=category&_expand=subcategory&_page=${page}&_limit=6`;
  if (categoryId !== null && categoryId !== undefined) {
    base += `&categoryId=${categoryId}`;
  }
  return instance.get(base);
};

export const productsCreateService = (data) =>
  instance.post("/products", { ...data, token: localStorage.getItem("token") });

export const uploadImages = (data) => {
  const formData = data.map((item) => {
    const fData = new FormData();
    fData.append("image", item);
    return fData
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
