import axios from "../../config/axios";

export const register = async (username, password, confirmPassword, email) => {
  const res = await axios.post("/users/register", {
    username,
    password,
    confirmPassword,
    email,
  });
  return res.response;
};

export const login = async (username, password) => {
  const res = await axios.post("/users/login", {
    username,
    password,
  });
  return res.response;
};
