import axios from "axios";

function ApiInstance(
  authorization = null,
  password = null,
  newpassword = null,
  confirmnewpassword = null
) {
  return axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
      authorization,
      password,
      newpassword,
      confirmnewpassword,
    },
  });
}

export const Instance = ApiInstance;
