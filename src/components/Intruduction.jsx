import { useRef, useState } from "react";

function Introduction({ handleStart, setName }) {
  const nameRef = useRef(null);
  const [name, setNameInput] = useState("");

  function handleName(e) {
    e.preventDefault();
    setName(nameRef.current.value);
    handleStart(true);
  }

  return (
    <>
      <p className="text-lg mt-10 text-center">
        ENTER YOUR NAME TO GET STARTED
      </p>
      <input
        type="text"
        className="px-3 py-1.5 border border-gray-400 rounded-md"
        placeholder="John Doe"
        ref={nameRef}
        value={name}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white px-4 py-1.5 mb-10 rounded-md cursor-pointer ${
          !name.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
        }`}
        onClick={handleName}
        disabled={!name.trim()}>
        Submit
      </button>
    </>
  );
}

export default Introduction;
