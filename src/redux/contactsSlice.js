import { createSlice } from "@reduxjs/toolkit";
import ContactsList from "../components/ContactList/ContactList.json";

const initialState = {
  items: ContactsList,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

export const selectContact = (state) => state.contacts.items;
