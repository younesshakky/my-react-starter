import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
});

export default http;
