import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact,patchContact } from './contactsOperations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from 'utilities/handleActions';
import { STATUS } from '../constants';

const actions = [fetchContacts, addContact, deleteContact];
const getActions = type => {
  return actions.map(action => action[type]);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(isAnyOf(...getActions(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getActions(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...getActions(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactSlice.reducer;
