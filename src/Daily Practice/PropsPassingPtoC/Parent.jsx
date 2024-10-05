import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [takeName, setTakeName] = useState("");
  return (
    <div>
      <h1>Parent Component</h1>
      <label htmlFor="child-input">Child Name : </label>
      <input
        type="text"
        id="child-input"
        placeholder="Enter child name"
        onChange={(e) => setTakeName(e.target.value)}
      />
      <hr />
      <Child name={takeName} country="India" />
    </div>
  );
}

export default Parent;
