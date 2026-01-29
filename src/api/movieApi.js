import axios from "axios";

export const movieApi = axios.create({
    baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
    headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST
  }
})