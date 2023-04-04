import axios from "axios";

export const baseURL = "http://localhost:3001";

export const userInstance = axios.create({
  baseURL,
  timeout: 15000,
});

export const instance = axios.create({
  baseURL,
  timeout: 15000,
});

instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken !== undefined) {
      if (!config.url.includes("auth/refresh-token")) {
        config.headers.token = authToken;
      }
      config.timeout = 800000;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      instance.defaults.headers.refreshToken =
        localStorage.getItem("refresh_token");
      instance.post("/auth/refresh-token").then(
        ({ data, status }) => {
          if (status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/adminLogin";
          } else {
            const { accessToken } = data;
            localStorage.setItem("token", accessToken);
            error.config.headers.token = accessToken;
            instance(error.config).then(() => window.location.reload());
          }
        },
        (error) => {
          if (error.response.status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/adminLogin";
          }
        }
      );
    } else {
      return Promise.reject(error);
    }
  }
);

export const toFormData = axios.toFormData;
