import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import useFetch from "../hooks/useFetch";
import badLogo from "../assets/images/undraw_reading_book_re_kqpk (1).svg";
import fairLogo from "../assets/images/undraw_reading_list_re_bk72 (1).svg";
import goodLogo from "../assets/images/undraw_reading_time_re_phf7.svg";
import excellentLogo from "../assets/images/undraw_good_team_re_j1kc (1).svg";
import Card from "../components/Card";
import Alert from "../components/Alert";

const FinalScorePage = () => {
  const { category, score, amountOfQuestions } = useSelector(
    (state) => state.quiz
  );

  const { response, error, isLoading } = useFetch(
    "https://opentdb.com/api_category.php"
  );

  const categoryDetails = response?.trivia_categories.find(
    (cat) => cat.id === +category
  );

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (error) {
    if (error) {
      return <Alert title={"Oops! something went wrong"} />;
    }
  }

  let quizScoreTitle;
  let quizScoreMsg;
  let image;
  if (score <= 2) {
    quizScoreMsg = "Oops! Please Take time to read at least 3 pages every day";
    quizScoreTitle = "Bad";
    image = badLogo;
  } else if (score <= 5) {
    quizScoreMsg = "Try to read 2 pages every day";
    quizScoreTitle = "Fair";
    image = fairLogo;
  } else if (score <= 8) {
    quizScoreMsg = "Nice Try! I advice you to read 1 page every day";
    quizScoreTitle = "Good";
    image = goodLogo;
  } else {
    quizScoreMsg = "Wow! you are good";
    quizScoreTitle = "Excellent";
    image = excellentLogo;
  }

  return (
    <section>
      <h5 className="text-center mb-3">{quizScoreMsg}</h5>
      <h6 className="text-center">
        Your Score is{" "}
        <strong>
          {" "}
          {score}/{amountOfQuestions}
        </strong>
      </h6>

      <Card
        categoryDetails={categoryDetails}
        image={image}
        quizScoreTitle={quizScoreTitle}
      />
    </section>
  );
};

export default FinalScorePage;
