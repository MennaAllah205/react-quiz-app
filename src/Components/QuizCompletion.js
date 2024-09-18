import React from "react";
import "./Css/Quizcompletion.css";

const QuizCompletion = ({ score, handleFinish }) => {
  return (
    <div className="quiz-completion">
      <h2>Quiz completed</h2>
      <p>Your Score: {score}</p>
      <button onClick={handleFinish}>Go To Results</button>
    </div>
  );
};

export default QuizCompletion;
