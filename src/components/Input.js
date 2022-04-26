import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAmountOfQuestionsHandler } from "../store/quizSlice";

const Input = ({ label }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(10);

  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
    if (label === "Amount") {
      dispatch(changeAmountOfQuestionsHandler(e.target.value));
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="number"
        className={`form-control d-block`}
        placeholder="Amount of questions"
        id="numberOfQuestions"
        min={1}
        value={amount}
        onChange={changeAmountHandler}
      />
      <span className="input-group-text" id="numberOfQuestions">
        Amount of Questions
      </span>
    </div>
  );
};

export default Input;
