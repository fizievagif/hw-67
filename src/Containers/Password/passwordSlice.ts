import {createSlice} from "@reduxjs/toolkit";

interface PasswordState {
  value: string;
}

const initialState: PasswordState = {
  value: ''
};

const password = '1337';

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    number: (state, action) => {},
    enter: () => {},
    deleteNumber: () => {}
  }
});

export const passwordReducer = passwordSlice.reducer;
export const {number, enter, deleteNumber} = passwordSlice.actions;