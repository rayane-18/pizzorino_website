import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import PropTypes from "prop-types";
const Quiz = ({ currentQuestion, setCurrentQuestion }) => {
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      {quizCompleted ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          currentQuestionNumber={currentQuestion}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
};
Quiz.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
};
export default Quiz;
