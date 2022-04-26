import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    theme: themeReducer,
  },
});

export default store;
