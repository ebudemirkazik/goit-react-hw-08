// src/redux/filters/slice.js
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (s, a) => { s.name = a.payload; },
  },
});
export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;