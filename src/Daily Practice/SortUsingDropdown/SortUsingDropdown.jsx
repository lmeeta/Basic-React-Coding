import React, { useEffect, useState } from "react";
import "./SortUsingDropdown.css";

function SortUsingDropdown() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([...users]);
  const [loading, setLoading] = useState(true);

  const CallApi = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setSortedUsers(data.users);
        setLoading(false);
      });
  };

  useEffect(() => {
    CallApi();
  }, []);

  const handleSort = (e) => {
    const { value } = e.target;
    const tempUsers = [...users];
    if (value === "younger") {
      const youngerSort = tempUsers.sort((a, b) => a.age - b.age);
      setSortedUsers(youngerSort);
    }
    if (value === "older") {
      const olderSort = tempUsers.sort((a, b) => b.age - a.age);
      setSortedUsers(olderSort);
    } else {
      setSortedUsers(tempUsers);
    }
  };

  if (loading) {
    return <h1>loading users...</h1>;
  }

  return (
    <>
      <h1>Sort Dropdown</h1>
      <br />
      <p>Age selection : </p>
      <select onChange={handleSort}>
        <option value="">Select</option>
        <option value="younger">Youngest </option>
        <option value="older">Oldest </option>
      </select>
      <br />
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((userdata) => {
            return (
              <tr key={userdata.id}>
                <td>{`${userdata.firstName} ${userdata.lastName}`}</td>
                <td>{userdata.email}</td>
                <td>{userdata.age}</td>
                <td>{userdata.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SortUsingDropdown;
