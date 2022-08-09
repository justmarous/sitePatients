import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  login: "",
  password: "",
  telephone: "",
  country: "",
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

export const selectUser = (state) => state.user;

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
