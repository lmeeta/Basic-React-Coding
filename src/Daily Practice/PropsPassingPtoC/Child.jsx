import React, { useState } from "react";

function Child({ name, country, setHobbies }) {
  const [childHobbies, setChildHobbies] = useState("");

  const handleClick = () => {
    setHobbies(childHobbies.split(","));
    setChildHobbies("");
  };

  return (
    <div>
      <h1>Child Component</h1>
      <p>My name is {name}</p>
      <br />
      <p>I am from {country}</p>
      <br />
      <label htmlFor="hobby">Enter Hobbies : </label>
      <input
        type="text"
        id="hobby"
        value={childHobbies}
        placeholder="use , for multiple hobbies"
        onChange={(e) => setChildHobbies(e.target.value)}
        style={{ height: "2rem" }}
      />
      <button onClick={handleClick}>Add hobbies</button>
    </div>
  );
}

export default Child;
