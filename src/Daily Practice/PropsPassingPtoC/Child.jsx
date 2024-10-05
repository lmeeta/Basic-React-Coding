import React from "react";

function Child({ name, country }) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>My name is {name}</p>
      <p>I am from {country}</p>
    </div>
  );
}

export default Child;
