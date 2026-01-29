import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuth: false
  },
  reducers: {
    signupUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    loginUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logoutUser(state) {
      state.user = null;
      state.isAuth = false;
    }
  }
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
