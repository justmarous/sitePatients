import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  login: "",
  password: "",
  telephone: "",
  country: "",
  patients: [
    {
      name: "",
      surname: "",
      email: "",
      gender: "",
      birth: "",
      location: "",
      telephone: "",
      index: "",
      mutation: "",
      classification: "",
      seizureDiary: "",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("user set");
      return action.payload;
    },
    logOut: (state) => {
      console.log("logging out");
      return initialState;
    },
  },
});

export const selectLogin = (state) => state.user.login;
export const selectUser = (state) => state.user;
export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
