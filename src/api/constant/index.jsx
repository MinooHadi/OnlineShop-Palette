import axios from "axios";

export const baseURL = "http://localhost:3001";

export const instance = axios.create({
  baseURL,
});

export const toFormData = axios.toFormData