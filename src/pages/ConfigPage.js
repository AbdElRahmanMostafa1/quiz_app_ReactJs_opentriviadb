import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Input from "../components/Input";
import LoadingSpinner from "../components/LoadingSpinner";
import Select from "../components/Select";
import useFetch from "../hooks/useFetch";
import { resetQuizState } from "../store/quizSlice";

const ConfigPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response, error, isLoading } = useFetch(
    "https://opentdb.com/api_category.php"
  );

  const questionsLevel = [
    {
      id: "easy",
      name: "Easy",
    },
    {
      id: "medium",
      name: "Medium",
    },
    {
      id: "difficult",
      name: "Difficult",
    },
  ];

  const questionsType = [
    {
      id: "boolean",
      name: "True / False",
    },
    {
      id: "multiple",
      name: "Multiple Choise",
    },
  ];

  useEffect(() => {
    dispatch(resetQuizState());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const configSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  if (error) {
    return <Alert title={"Oops! something went wrong"} />;
  }

  return (
    <div>
      <h3 className="text-center">Quiz Configurations</h3>
      <form onSubmit={configSubmitHandler}>
        <Select
          label={"Category"}
          options={response?.trivia_categories}
          defaultOption="Any Category"
        />
        <Select
          label={"Difficulty"}
          options={questionsLevel}
          defaultOption="Any Difficulty"
        />
        <Select
          label={"Type"}
          options={questionsType}
          defaultOption="Any Type"
        />
        <Input label={"Amount"} />
        <button className="btn btn-primary w-100" type="submit">
          Go To Quiz
        </button>
      </form>
    </div>
  );
};

export default ConfigPage;
