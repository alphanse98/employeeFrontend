import axios from "axios";

export const baseUrl = "http://localhost:8080/api/";

axios.interceptors.request.use(
  function (config) {
    if (!config.url.endsWith("/login") && !config.url.endsWith("/register")) {
      config.headers["Authorization"] = localStorage.getItem("AuthToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default function login(param) {
  return axios.post(baseUrl + "login", param);
}

export function register(param) {
  return axios.post(baseUrl + "register", param);
}





