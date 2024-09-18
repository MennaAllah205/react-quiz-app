import React from "react";
import "./Css/Questions.css";

const Question = ({
  question,
  options,
  selectedOption,
  setSelectedOption,
  handleNext,
  handleFinish,
  isLastQuestion,
}) => {
  return (
    <div className="question-container">
      <h2> {question} </h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={isLastQuestion ? handleFinish : handleNext}>
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Question;
