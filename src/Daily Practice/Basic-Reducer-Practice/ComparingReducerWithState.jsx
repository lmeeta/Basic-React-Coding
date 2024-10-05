import React, { useState } from "react";
import { Link } from "react-router-dom";

function ComparingReducerWithState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Increment & Decrement Count</h1>
      <hr />
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <br />

      <Link to="/basicReducer">Back To Reducer</Link>
    </>
  );
}
export default ComparingReducerWithState;
