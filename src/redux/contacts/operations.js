// src/redux/contacts/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api"; // DİKKAT: burada baseURL tanımlamayacağız (rubrik gereği)

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, t) => {
  try { const { data } = await api.get("/contacts"); return data; }
  catch (e) { return t.rejectWithValue(e.message); }
});

export const addContact = createAsyncThunk("contacts/add", async (body, t) => {
  try { const { data } = await api.post("/contacts", body); return data; }
  catch (e) { return t.rejectWithValue(e.message); }
});

export const deleteContact = createAsyncThunk("contacts/delete", async (id, t) => {
  try { await api.delete(`/contacts/${id}`); return id; }
  catch (e) { return t.rejectWithValue(e.message); }
});