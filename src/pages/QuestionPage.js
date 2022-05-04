import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { decode } from "html-entities";
import getRandomInt from "../utils/getRandomInt";
import { changeScoreHandler } from "../store/quizSlice";
import Alert from "../components/Alert";
import correctAnswerSound from "../assets/audio/correct-answer.mp3";
import wrongAnswerSound from "../assets/audio/wrong-answer.mp3";

const QuestionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, level, questionType, amountOfQuestions } = useSelector(
    (state) => state.quiz
  );
  let [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  let [score, setScore] = useState(0);
  const correctAnswerAudio = new Audio(correctAnswerSound);
  const wrongAnswerAudio = new Audio(wrongAnswerSound);

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${level}&type=${questionType}
  `;

  const { response, error, isLoading } = useFetch(url);

  useEffect(() => {
    if (response?.results.length > 0) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [questionIndex, response?.results]);

  const choiseQuestionHandler = (e) => {
    if (questionIndex + 1 < response?.results.length) {
      setQuestionIndex((questionIndex += 1));
    } else {
      navigate("/score");
      dispatch(changeScoreHandler(score));
    }
    if (
      e.target.textContent ===
      response?.results[questionIndex - 1].correct_answer
    ) {
      setScore((score += 1));
      correctAnswerAudio.play();
    } else {
      wrongAnswerAudio.play();
    }
  };

  if (error) {
    return <Alert title={"Oops! something went wrong"} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (response?.results.length === 0) {
    return <Alert title={"Invalid Quiz Configurations"} />;
  }

  return (
    <div className="text-center">
      <h2> Question {questionIndex + 1} </h2>
      <h3 className="my-5">
        {decode(response?.results[questionIndex].question)}
      </h3>
      {response?.results[questionIndex].type === "boolean" ? (
        <>
          <button
            className="btn btn-primary d-block w-100 mb-2"
            onClick={choiseQuestionHandler}
          >
            True
          </button>
          <button
            className="btn btn-primary d-block w-100 mb-2"
            onClick={choiseQuestionHandler}
          >
            False
          </button>
        </>
      ) : (
        <>
          {options.map((option) => {
            return (
              <button
                className="btn btn-primary d-block w-100 mb-2"
                key={option}
                onClick={choiseQuestionHandler}
              >
                {decode(option)}
              </button>
            );
          })}
        </>
      )}
      <div className="mt-5">
        Score: {score}/{response?.results.length}
      </div>
    </div>
  );
};

export default QuestionPage;
