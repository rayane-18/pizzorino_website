import { useState } from "react";
import PropTypes from "prop-types";
const Question = ({
  question,
  options,
  onAnswer,
  currentQuestionNumber,
  totalQuestions,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer);
    setSelectedAnswer(null);
  };

  return (
    <div>
      <h2>
        Question {currentQuestionNumber + 1}/{totalQuestions}
      </h2>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={selectedAnswer === option ? "selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit
      </button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Question;
