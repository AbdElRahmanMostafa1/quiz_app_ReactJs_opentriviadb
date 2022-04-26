import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  level: "",
  questionType: "",
  amountOfQuestions: 10,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeCategoryHandler: (state, action) => {
      state.category = action.payload;
    },
    changeLevelHandler: (state, action) => {
      state.level = action.payload;
    },
    changeQuestionTypeHandler: (state, action) => {
      state.questionType = action.payload;
    },
    changeAmountOfQuestionsHandler: (state, action) => {
      state.amountOfQuestions = action.payload;
    },
    changeScoreHandler: (state, action) => {
      state.score = action.payload;
    },
    resetQuizState: (state) => {
      state.category = "";
      state.level = "";
      state.questionType = "";
      state.amountOfQuestions = 10;
      state.score = 0;
    },
  },
});

export const {
  changeCategoryHandler,
  changeLevelHandler,
  changeQuestionTypeHandler,
  changeAmountOfQuestionsHandler,
  changeScoreHandler,
  resetQuizState,
} = quizSlice.actions;
export default quizSlice.reducer;
