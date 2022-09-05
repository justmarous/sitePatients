import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerForm: true,
};

export const registerFormSlice = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    switchForm: (state, action) => action.payload,
  },
});

export const selectRegisterForm = (state) => state.registerForm;

export const { switchForm } = registerFormSlice.actions;
export default registerFormSlice.reducer;
