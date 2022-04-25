const initialState = {
  category: "",
  level: "",
  questionType: "",
  amountOfQuestions: 10,
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
    changeCategoryHandler: (state, action) => {
      state.category = action.payload;
    },
    changeCategoryHandler: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default quizSlice.reducer;
