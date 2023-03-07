import { instance } from "../../constant";

export const loginAdminService = (data) => instance.post("/auth/login", data);
