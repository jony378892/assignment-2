import { useRef, useState } from "react";

function Introduction({ handleStart, setName }) {
  const nameRef = useRef(null);

  function handleName(e) {
    e.preventDefault();
    setName(nameRef.current.value);
    handleStart(true);
  }

  return (
    <>
      <p className="text-lg mt-10 text-center">
        {" "}
        ENTER YOUR NAME TO GET STARTED
      </p>
      <input
        type="text"
        className="px-3 py-1.5  border border-blue-500 rounded-md bg-white"
        placeholder="Your name"
        required
        ref={nameRef}
      />
      <button
        type="submit"
        className="text-white bg-blue-500 px-4 py-1.5 mb-10 rounded-md cursor-pointer"
        onClick={handleName}>
        Submit
      </button>
    </>
  );
}

export default Introduction;
