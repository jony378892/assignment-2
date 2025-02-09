import { useState } from "react";
import Questions from "./components/Questions";
import Introduction from "./components/Intruduction";
import Results from "./components/Results";

function App() {
  const [name, setName] = useState();
  const [start, setStart] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [totalMark, setTotalMark] = useState(0);
  const totalQue = 10; // Assuming there are 10 questions

  function handleStart() {
    setStart(true);
    setShowResults(false);
    setTotalMark(0);
  }

  function handleFinishQuiz(marks) {
    setTotalMark(marks);
    setShowResults(true);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blue-500">
      <div className="flex flex-col gap-3 p-6 bg-white rounded-xl items-center shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-5/12 h-fit">
        <div className="flex flex-col justify-center gap-4">
          {showResults ? (
            <Results
              name="User"
              totalMark={totalMark}
              totalQue={totalQue}
              userName={name}
            />
          ) : start ? (
            <Questions onFinish={handleFinishQuiz} />
          ) : (
            <Introduction
              handleStart={handleStart}
              setName={setName}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
