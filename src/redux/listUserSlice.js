import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Johann",
    surname: "Stenzel",
    login: "user@gmail.com",
    password: "qwerty1",
    telephone: "997889190",
    country: "DE",
    patients: [
      {
        name: "Julia",
        surname: "Johnson",
        email: "jjohnson@gmail.com",
        gender: "female",
        birth: "2001-11-01",
        location: "New York",
        telephone: "+380 303 232 123",
        index: "12312",
        mutation: "",
        classification: "",
        seizureDiary: "",
      },
      {
        name: "Miko",
        surname: "Ortega",
        email: "megasnake@gmail.com",
        gender: "male",
        birth: "2000-11-02",
        location: "New Orlean",
        telephone: "+190 103 212 135",
        index: "12313",
        mutation: "",
        classification: "",
        seizureDiary: "",
      },
    ],
  },
];

export const listUserSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, { ...action.payload, patients: [] }];
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
