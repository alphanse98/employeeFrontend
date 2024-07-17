import { baseUrl } from "./AuthService";
import axios from "axios";



export default function getDetails() {
  return axios.get(baseUrl + "getDetails");
}

export default function createDetails() {
  return axios.post(baseUrl + "createDetails");
}