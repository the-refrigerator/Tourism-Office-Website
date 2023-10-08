import axios from "axios";

const newRequest = axios.create({
  //baseURL: "http://localhost:1234/api/",
  // baseURL: "https://bashoeapi.onrender.com/api/",
  baseURL: "https://nasa-tourism-api.onrender.com/api/"
});

export default newRequest;
