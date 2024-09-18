import React, { useState } from "react";
import frontendQuestions from "../frontendQuestions";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import QuizCompletion from "./QuizCompletion";
import "./Css/Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState("");
  const [statusClass, setStatusClass] = useState("");

  const handleNext = () => {
    if (selectedOption === frontendQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setAnswerStatus("Correct!");
      setStatusClass("correct");
    } else {
      setAnswerStatus("Incorrect!");
      setStatusClass("incorrect");
    }
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleFinish = () => {
    if (selectedOption === frontendQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    navigate("/results", {
      state: {
        score:
          score +
          (selectedOption === frontendQuestions[currentQuestionIndex].answer
            ? 1
            : 0),
      },
    });
  };

  const isQuizComplete = currentQuestionIndex >= frontendQuestions.length;
  const isLastQuestion = currentQuestionIndex === frontendQuestions.length - 1;

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {isQuizComplete ? (
        <QuizCompletion
          score={score}
          handleFinish={() => navigate("/results", { state: { score } })}
        />
      ) : (
        <>
          <Question
            question={frontendQuestions[currentQuestionIndex].question}
            options={frontendQuestions[currentQuestionIndex].options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleNext={handleNext}
            handleFinish={handleFinish}
            isLastQuestion={isLastQuestion}
          />
          {answerStatus && (
            <p className={`answer-status ${statusClass}`}>{answerStatus}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
