import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [takeName, setTakeName] = useState("");
  const [hobbies, setHobbies] = useState([]);

  return (
    <div>
      <h1>Parent Component</h1>
      <label htmlFor="child-input">Child Name : </label>
      <input
        type="text"
        id="child-input"
        placeholder="Enter child name"
        onChange={(e) => setTakeName(e.target.value)}
        style={{ height: "2rem" }}
      />
      <br />
      <br />

      {hobbies.length > 0 && (
        <>
          <p>My Hobbies</p>
          <ul>
            {hobbies.map((hobby, index) => {
              return <li key={index}>{hobby}</li>;
            })}
          </ul>
        </>
      )}

      <hr />
      <Child name={takeName} country="India" setHobbies={setHobbies} />
    </div>
  );
}

export default Parent;
