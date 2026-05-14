import axios from "axios";

// Central Axios instance for the Express backend.
// This backend uses httpOnly JWT cookies, so credentials must be included.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:7001",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
