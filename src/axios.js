import axios from "axios";

const instance = axios.create({
  baseURL: "/.netlify/functions/api",
});

export default instance;
