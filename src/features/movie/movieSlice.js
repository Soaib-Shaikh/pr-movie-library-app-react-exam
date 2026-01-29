import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";

export const getAllMovies = createAsyncThunk('movies/getAllMovies', async (__dirname, { rejectWithValue }) => {
    try {
        const res = await movieApi.get("/movies");
        return res.data.results || res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const searchMovies = createAsyncThunk(
    "movies/searchMovies",
    async (query, { rejectWithValue }) => {
        try {
            const res = await movieApi.get(`/titles/search/keyword/${query}`);
            return res.data.results || res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getMovieDetails = createAsyncThunk(
    "movies/getMovieDetails",
    async (id, { rejectWithValue }) => {
        try {
            const res = await movieApi.get(`/title/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        selectedMovie: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // get all movie
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Search movies
            .addCase(searchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get movie details
            .addCase(getMovieDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedMovie = action.payload;
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default movieSlice.reducer