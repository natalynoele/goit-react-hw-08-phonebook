import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, logIn, register } from './authOperations';
import { STATUS } from 'redux/constants';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false
};

const actions = [register, logIn];
const getActions = type => {
  return actions.map(action => action[type]);
};
const handleUserPending = (state) => {
  state.isLoading = true;
  state.error = null;
}

const handleUserRejected = (state, { payload }) => {
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
     const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(logOut.fulfilled, state => (state = initialState))
      .addMatcher(isAnyOf(...getActions(PENDING)), handleUserPending)
      .addMatcher(isAnyOf(...getActions(REJECTED)), handleUserRejected)
      .addMatcher(isAnyOf(...getActions(FULFILLED)), handleUserFulfilled);
  },
});

export const authReducer = authSlice.reducer;
