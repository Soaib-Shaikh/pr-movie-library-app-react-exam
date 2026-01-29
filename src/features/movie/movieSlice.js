import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";

// Popular movies
export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await movieApi.get("/movie/popular");
      return res.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Search movies
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (query, { rejectWithValue }) => {
    try {
      const res = await movieApi.get("/search/movie", {
        params: { query }
      });
      return res.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Movie details
export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (id, { rejectWithValue }) => {
    try {
      const res = await movieApi.get(`/movie/${id}`);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })

      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      });
  }
});

export default movieSlice.reducer;
