import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
       if (response.status > 400) {
         return thunkAPI.rejectWithValue(response.statusText);
       }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      if (response.status > 400) {
        return thunkAPI.rejectWithValue(response.statusText);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
       if (response.status > 400) {
         return thunkAPI.rejectWithValue(response.statusText);
       }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/patchContact',
  async (dataUser, thunkAPI) => {
    try {
     
      const response = await axios.patch(`/contacts/${dataUser.id}`, {
        name: dataUser.name,
        number: dataUser.number,
      });
      
      if (response.status > 400) {
         return thunkAPI.rejectWithValue(response.statusText);
      }
      const responseData = await axios.get('/contacts');
       if (responseData.status > 400) {
         return thunkAPI.rejectWithValue(responseData.statusText);
       }
      return responseData.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
