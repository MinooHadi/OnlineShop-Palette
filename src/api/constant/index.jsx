import axios from "axios";

export const baseURL = "http://localhost:3001";

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
      instance.post("/auth/refresh-token").then(({ data }) => {
        const { accessToken } = data;
        localStorage.setItem("token", accessToken);
        error.config.headers.token = accessToken
        instance(error.config).then(() => window.location.reload());
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export const toFormData = axios.toFormData;
