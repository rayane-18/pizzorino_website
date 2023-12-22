import PropTypes from "prop-types";
const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>
        Your Score: {score}/{totalQuestions}
      </p>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Result;
