import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [takeName, setTakeName] = useState("");
  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="text"
        placeholder="Enter child name"
        onChange={(e) => setTakeName(e.target.value)}
      />
      <hr />
      <Child name={takeName} />
    </div>
  );
}

export default Parent;
