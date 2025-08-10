// src/redux/auth/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader, clearAuthHeader } from "../api";

// POST /users/signup {name, email, password}
export const register = createAsyncThunk("auth/register", async (cred, thunkAPI) => {
  try {
    const { data } = await api.post("/users/signup", cred);
    setAuthHeader(data.token);
    return data; // { user, token }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const login = createAsyncThunk("auth/login", async (cred, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", cred);
    setAuthHeader(data.token);
    return data; // { user, token }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// src/redux/auth/operations.js
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) return thunkAPI.rejectWithValue("No token");
  try {
    setAuthHeader(token);
    const { data } = await api.get("/users/current");
    return data;
  } catch (e) {
    if (e.response?.status === 401) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue("Unauthorized");
    }
    return thunkAPI.rejectWithValue(e.message);
  }
});