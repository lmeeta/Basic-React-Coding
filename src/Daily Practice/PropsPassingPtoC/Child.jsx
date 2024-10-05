import React from "react";

function Child({ name }) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>My name is {name}</p>
    </div>
  );
}

export default Child;
