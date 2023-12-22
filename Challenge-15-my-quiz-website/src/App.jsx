import { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="App">
      <h1>Video Game Quiz</h1>
      <Quiz
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
};

export default App;
