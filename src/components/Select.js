import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCategoryHandler,
  changeLevelHandler,
  changeQuestionTypeHandler,
} from "../store/quizSlice";

const Select = ({ label, options, defaultOption }) => {
  const dispatch = useDispatch();

  const [selectValue, setSelectValue] = useState("");

  const selectValueHandler = (e) => {
    setSelectValue(e.target.value);
    if (label === "Category") {
      dispatch(changeCategoryHandler(e.target.value));
    } else if (label === "Difficulty") {
      dispatch(changeLevelHandler(e.target.value));
    } else if (label === "Type") {
      dispatch(changeQuestionTypeHandler(e.target.value));
    }
  };

  return (
    <>
      <label htmlFor={label} className="mb-1 text-capitalize">
        Select {label} :
      </label>
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        id={label}
        value={selectValue}
        onChange={selectValueHandler}
      >
        <option value={""}>{defaultOption}</option>
        {options?.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
