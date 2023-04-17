import { createSlice } from "@reduxjs/toolkit";

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    isMenuShowed: false,
  },
  reducers: {
    changeMenuStatus: (state, action) => {
      state.isMenuShowed = action.payload;
    },
  },
});

export const { changeMenuStatus } = mainPageSlice.actions;
export default mainPageSlice.reducer;
