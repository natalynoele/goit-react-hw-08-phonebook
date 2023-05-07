import { createSlice } from '@reduxjs/toolkit';
import { logOut, logIn, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const handleUserRejected = (state, { payload}) => {
    state.error = payload;
  state.isLoggedIn = false;
};

const handleUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    
    builder
      .addCase(register.fulfilled, handleUserFulfilled)
      .addCase(register.rejected, handleUserRejected)
      .addCase(logIn.fulfilled, handleUserFulfilled)
      .addCase(logOut.fulfilled, state => state = initialState         
    )
      .addCase(logOut.rejected, handleUserRejected);
  },
});

export const authReducer = authSlice.reducer;
