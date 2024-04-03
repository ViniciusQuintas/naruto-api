import axios from "axios";
import { API_BASE_URL } from "@/constants/api.js";

const api_client = axios.create({
    baseURL: API_BASE_URL
});

export default api_client;