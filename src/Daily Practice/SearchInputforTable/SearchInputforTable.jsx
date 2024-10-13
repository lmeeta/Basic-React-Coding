import React, { useEffect, useState } from "react";
import "./SearchInputforTable.css";

function SearchInputforTable() {
  const [todos, setTodos] = useState([]);
  const [todoData, setTodoData] = useState(todos);

  const CallApi = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setTodoData(data.todos);
      });
  };

  useEffect(() => {
    CallApi();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      setTodoData(todos);
    }

    const filterTodo = todos.filter((todoList) =>
      todoList.todo.toLowerCase().includes(value.toLowerCase())
    );

    setTodoData(filterTodo);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setTodoData(todos);
    } else if (value === "completed") {
      const completedData = todos.filter((todoComp) => todoComp.completed);
      setTodoData(completedData);
    } else if (value === "inprogress") {
      const inprogressData = todos.filter((todoComp) => !todoComp.completed);
      setTodoData(inprogressData);
    }
  };
  return (
    <>
      <h1>Todo List </h1>
      <label>Let's check task</label>
      <input
        type="test"
        placeholder="Enter a task"
        id="inputTextStyle"
        onChange={handleChange}
      />
      <label>Status</label>
      <select onChange={handleSelect}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="inprogress">In Progress</option>
      </select>

      <ul>
        {todoData.map((todo) => {
          return (
            <li key={todo.id} className="liStyle">
              <input type="checkbox" checked={todo.completed} />
              Task : {todo.todo}
              <p>Status : {todo.completed ? "completed" : "In progress"}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SearchInputforTable;
