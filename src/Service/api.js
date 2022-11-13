import axios from "axios";
// const url = "http://127.0.0.1:3003/home";
const url = "https://jsonplaceholder.typicode.com/posts";

export const getAllHome = async () => {
  return await axios.get(`${url}`);
};

export const getHome = async (id) => {
  return await axios.get(`${url}/${id}`);
};

export const deleteHome = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const addHome = async (home) => {
  return await axios.post(url, home);
};

export const updateHome = async (id, home) => {
  return await axios.put(`${url}/${id}`, home);
};
