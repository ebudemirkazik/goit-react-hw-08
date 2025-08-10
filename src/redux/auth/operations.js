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

// GET /users/current  (token zorunlu)
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) return thunkAPI.rejectWithValue("No token");
  try {
    setAuthHeader(token);
    const { data } = await api.get("/users/current"); // { name, email }
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});