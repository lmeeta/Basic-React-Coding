import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
};

function BasicReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Learning useReducer</h1>
      <hr />
      <p>Count : {count}</p>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrement
      </button>
      <br />
      <Link to="/incrementDecrement">Comparing Reducer With State</Link>
    </>
  );
}

export default BasicReducer;
