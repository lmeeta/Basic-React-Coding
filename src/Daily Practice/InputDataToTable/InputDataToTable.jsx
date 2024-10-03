import React, { useState } from "react";
import "./InputDataToTable.css";

function InputDataToTable() {
  const [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    age: "",
  });
  const [inputData, setInputData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    setInputData([...inputData, formdata]);
    setFormData({
      fname: "",
      lname: "",
      age: "",
    });
  };
  return (
    <>
      <h1>Hello User</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your first name"
          name="fname"
          value={formdata.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={handleChange}
          value={formdata.lname}
          name="lname"
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formdata.age}
          onChange={handleChange}
        />

        <button onClick={handleClick}>Add To List</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((userdata, index) => {
            return (
              <tr key={index}>
                <td>{userdata.fname}</td>
                <td>{userdata.lname}</td>
                <td>{userdata.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default InputDataToTable;
