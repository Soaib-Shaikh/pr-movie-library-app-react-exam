import axios from "axios";

export const movieApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
    "Content-Type": "application/json"
  }
});
