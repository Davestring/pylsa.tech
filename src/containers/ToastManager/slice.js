import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import fp from 'lodash/fp';

export const initialState = [];

const toastManaggerSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    addToast: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(payload) {
        return { payload: fp.merge({ id: v4() })(payload) };
      },
    },
    removeToast(state, action) {
      state.splice(state.findIndex(({ id }) => id === action.payload.id));
    },
  },
});

export const addErrorToast = fp.curry((message) =>
  addToast({ description: message, status: 'error' }),
);

export const addWarningToast = fp.curry((message) =>
  addToast({ description: message, status: 'warning' }),
);

export const addSuccessToast = fp.curry((message) =>
  addToast({ description: message, status: 'success' }),
);

export const { addToast, removeToast } = toastManaggerSlice.actions;

export const { reducer } = toastManaggerSlice;
