import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (s) => s.contacts.items; // ← reducer anahtarı `contacts` olmalı

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        (c.number ?? "").toLowerCase().includes(q)
    );
  }
);