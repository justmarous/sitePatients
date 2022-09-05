import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isResetting: false,
};

export const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    doReset: (state, action) => {
      return {
        isResetting: !state.isResetting,
      };
    },
  },
});

export const selectResettingState = (state) => state.reset.isResetting;
export const { doReset } = resetSlice.actions;
export default resetSlice.reducer;
