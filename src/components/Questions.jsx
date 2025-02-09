import { useEffect, useState } from "react";

function Questions({ onFinish }) {
  const [SampleData, setSampleData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.jsonserve.com/Uw5CrX");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setSampleData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [totalMark, setTotalMark] = useState(0);
  const ques = SampleData ? SampleData.questions : [];
  const totalQues = ques.length;

  function nextQues() {
    if (questionIndex + 1 < totalQues) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setSelected(null);
    } else {
      onFinish(totalMark);
    }
  }

  function handleSelect(index, isCorrect) {
    setSelected({ index, isCorrect });
    if (isCorrect) {
      setTotalMark((prevMark) => prevMark + 1);
    }
  }

  return (
    <div className="p-6">
      {error ? (
        <p>Error: {error}</p>
      ) : SampleData ? (
        <>
          <p className="pb-10 text-center text-sm sm:text-base md:text-lg lg:text-xl">
            {questionIndex + 1}/ {totalQues}{" "}
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-xl text-rose-600">
              {ques[questionIndex].description}
            </p>
            <hr className="my-5" />
            <div className="space-y-3">
              {ques[questionIndex].options.map((question, index) => (
                <button
                  key={question.id}
                  className={`text-sm block w-full text-start p-2 rounded-md cursor-pointer transition-all ${
                    selected !== null && selected.index === index
                      ? selected.isCorrect
                        ? "text-white bg-green-500"
                        : "text-white bg-red-500"
                      : "text-blue-500 bg-white"
                  }`}
                  disabled={selected !== null}
                  onClick={() => handleSelect(index, question.is_correct)}>
                  <span className="py-0.5 px-1.5 rounded-full bg-stone-700 text-white mr-3 font-semibold">
                    {index + 1}
                  </span>{" "}
                  <span className="font-medium">{question.description} </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 px-10 py-1.5 text-white shadow-lg w-fit place-self-end rounded cursor-pointer mt-4 font-semibold"
              onClick={nextQues}
              disabled={selected === null}>
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Questions;
