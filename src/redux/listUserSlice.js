import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Johann",
    surname: "Stenzel",
    login: "user@gmail.com",
    password: "qwerty1",
    telephone: "997889190",
    country: "DE",
  },
];

export const listUserSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const selectListUser = (state) => state.listUser;

export const { addUser } = listUserSlice.actions;
export default listUserSlice.reducer;
