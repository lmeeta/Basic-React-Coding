import React, { useEffect, useMemo, useState } from "react";
import "./FilterDropDown.css";

function FilterDropDown() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState(users);

  const CallApi = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  };

  useEffect(() => {
    CallApi();
  }, []);

  const handleFilter = (e) => {
    const { value } = e.target;

    if (value === "all") {
      setFilterUsers(users);
    } else {
      const genderFilter = users.filter(
        (user) => user.gender.toLowerCase() === value
      );
      setFilterUsers(genderFilter);
    }
  };

  useEffect(() => {
    setFilterUsers(users);
  }, [users]);
  return (
    <>
      <h1>Filter Dropdown</h1>
      <br />
      <p>Gender selection : </p>
      <select onChange={handleFilter}>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">EyeColor</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.map((userdata) => {
            return (
              <tr key={userdata.id}>
                <td>{`${userdata.firstName} ${userdata.lastName}`}</td>
                <td>{userdata.email}</td>
                <td>{userdata.gender}</td>
                <td>{userdata.eyeColor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FilterDropDown;
