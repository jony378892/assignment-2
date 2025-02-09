function Results({ name, totalMark, totalQue }) {
  const percentage = (totalMark / totalQue) * 100;
  let message = "";
  let messageClass = "";

  if (percentage >= 80) {
    message = "Excellent job! You did great!";
    messageClass = "text-green-500";
  } else if (percentage >= 50) {
    message = "Good effort! Keep practicing!";
    messageClass = "text-yellow-500";
  } else {
    message = "Don't worry! Try again and you'll improve!";
    messageClass = "text-red-500";
  }

  return (
    <div className="text-center flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg">
      <p className="text-xl font-semibold">Hello, {name}</p>
      <p className="text-lg">
        Your total score is {totalMark} out of {totalQue}
      </p>
      <p className={`text-lg font-medium ${messageClass}`}>{message}</p>
    </div>
  );
}

export default Results;
