import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PasswordState {
  value: string;
  isGranted: string;
}

const initialState: PasswordState = {
  value: '',
  isGranted: ''
};

const password = '1337';

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    number: (state, action: PayloadAction<string>) => {
      if (state.value.length <= 3) {
        state.value += action.payload;
      } else {
        state.isGranted = 'Error';
        state.value = '';
      }
    },

    enter: (state) => {
      if (state.value === password) {
        state.isGranted = 'Access_granted';
      } else {
        state.isGranted = 'Access_denied';
      }
      state.value = '';
    },

    deleteNumber: (state) => {
      const remove = state.value.length - 1;
      state.value = state.value.slice(0, remove);
    },

    clearMessage: (state) => {
      state.isGranted = '';
    },
  }
});

export const passwordReducer = passwordSlice.reducer;
export const {number, enter, deleteNumber,clearMessage} = passwordSlice.actions;