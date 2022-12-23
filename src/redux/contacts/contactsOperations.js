import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (err) {
      console.log(err.message);

      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  }
);
// ---------not use, get  this data from local storage
// export const getContactById = createAsyncThunk(
//   'contacts/getContactById',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/contacts/${contactId}`);
//       console.log(response);
//       return response.data;
//     } catch (err) {
//       console.log(err.message);
//       return rejectWithValue(err.message);
//     }
//   }
// );

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name: name,
        number: number,
      });
      return response.data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  }
);
