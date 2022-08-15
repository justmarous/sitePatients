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
    removeUser: (state, action) => {
      console.log("deleting " + action.payload.login);
      return state.filter((element) => element.login !== action.payload.login);
    },
  },
});

export const selectListUser = (state) => state.listUser;

export const { addUser, removeUser } = listUserSlice.actions;
export default listUserSlice.reducer;
