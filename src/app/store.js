import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice'
import userReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer : {
        movies : movieReducer,
        users : userReducer
    }
})
