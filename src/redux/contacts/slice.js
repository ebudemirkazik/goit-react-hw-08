// src/redux/contacts/slice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = { items: [], isLoading: false, error: null };

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchContacts.pending, (s) => {
      s.isLoading = true;
      s.error = null;
    })
      .addCase(fetchContacts.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.payload;
      })
      .addCase(fetchContacts.fulfilled, (s, a) => {
        s.isLoading = false;
        s.items = a.payload; // <-- listeyi store’a yaz
      })
      .addCase(addContact.fulfilled, (s, a) => {
        s.items.push(a.payload);
      })
      .addCase(deleteContact.fulfilled, (s, a) => {
        s.items = s.items.filter((c) => c.id !== a.payload);
      })
      // 🔴 logout sonrası listeyi sıfırla
      .addCase(logout.fulfilled, (s) => {
        s.items = [];
        s.error = null;
        s.isLoading = false;
      });
  },
});

export const contactsReducer = slice.reducer;
