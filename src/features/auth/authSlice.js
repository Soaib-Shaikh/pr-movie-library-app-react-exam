import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    isAuthenticated: false
  },
  reducers: {
    signupUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
