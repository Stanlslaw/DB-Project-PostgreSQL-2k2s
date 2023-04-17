import { configureStore } from "@reduxjs/toolkit";
import WindowSizeSlice from "../Slices/WindowSizeSlice.js";
import MainPageSlice from "../components/MainPage/Slices/MainPageSlice.js";

export const store = configureStore({
  reducer: { windowSize: WindowSizeSlice, mainPage: MainPageSlice },
});
