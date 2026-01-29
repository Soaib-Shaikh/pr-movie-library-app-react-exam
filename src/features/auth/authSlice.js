import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser,
    isAuth: !!savedUser
  },
  reducers: {
    signupUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("user");
    }
  }
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
