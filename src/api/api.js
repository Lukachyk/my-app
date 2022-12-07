import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": " ",
  },
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axios
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respons) => {
        return respons.data;
      });
  },
};
