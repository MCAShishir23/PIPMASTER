import { UserData } from "../user/register";
import { getNewAxiosInstance } from "./apiClient";

export function registerUser(details: UserData) {
  const axiosClient = getNewAxiosInstance();
  return axiosClient.post(`/user/register`, details);
}

export function loginUser(details: UserData) {
  const axiosClient = getNewAxiosInstance();
  return axiosClient.post(`/user/login`, details);
}
