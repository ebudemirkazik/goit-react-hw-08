// src/redux/auth/slice.js
import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b
      .addCase(register.fulfilled, (s, a) => {
        s.user = a.payload.user;
        s.token = a.payload.token;
        s.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.user = a.payload.user;
        s.token = a.payload.token;
        s.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (s) => {
        s.user = { name: null, email: null };
        s.token = null;
        s.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (s) => {
        s.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (s, a) => {
        s.user = a.payload;
        s.isLoggedIn = true;
        s.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (s) => {
        s.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;