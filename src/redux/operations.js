import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../shared/api/contactsAPI";
import { toast } from "react-toastify";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await api.getContact();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (!data.name.trim() || !data.number.trim()) {
        toast.error("Please, enter Name and Number", {
          position: "top-center",
        });
        return false;
      }
      if (isDublicate(data, contacts.items)) {
        toast.warn(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);
export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find((item) => {
    return normalizedName === item.name.toLowerCase();
  });
  return Boolean(result);
};
