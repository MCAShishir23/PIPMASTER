import axios from "axios";

export function getNewAxiosInstance() {
  return axios.create({
    baseURL: "http://localhost:5000",
  });
}
