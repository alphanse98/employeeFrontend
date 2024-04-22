import{baseUrl} from "./AuthService"
import axios from "axios";

axios.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = localStorage.getItem("AuthToken");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );


export default function getEmployee() {
    return axios.get(baseUrl + "getEmployee",);
  }