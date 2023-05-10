import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'redux/constants';

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.post['Content-Type'] = 'application/json';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader =() => {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);   
      return response.data;
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('users/login', { email, password });      
     setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log('errorauth :>> ', error);
      return thunkAPI.rejectWithValue('Incorrect email or password');
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', 
   async (_, thunkAPI) => {
     try {
     await axios.post('users/logout');      
      clearAuthHeader();  
      return 
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
  }
}
)

export const CurrentUser = createAsyncThunk('auth/user',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post('users/current', setAuthHeader(token));
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
}
)
