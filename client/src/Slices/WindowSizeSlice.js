import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 1280,
};

export const WindowSizeSlice = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    changeSize: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { changeSize } = WindowSizeSlice.actions;
export default WindowSizeSlice.reducer;
