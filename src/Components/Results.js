import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import frontendQuestions from "../frontendQuestions";
import "./Css/Results.css";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;
  const totalQuestions = frontendQuestions.length;
  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      <p>
        Your score is {score} out of {totalQuestions}
      </p>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Results;
