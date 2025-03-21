import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    },
});