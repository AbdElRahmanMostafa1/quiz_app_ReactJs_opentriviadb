import { createSlice } from "@reduxjs/toolkit";

const modeFromLocalStorage = localStorage.getItem("mode")
  ? JSON.parse(localStorage.getItem("mode"))
  : false;

const initialState = {
  darkMode: modeFromLocalStorage,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("mode", state.darkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
