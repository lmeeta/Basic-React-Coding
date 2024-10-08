import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Daily Activities</h1>
      <ul>
        <li>
          Day 1: <Link to="/tableusingmap">Table Using Map</Link>
        </li>
        <li>
          Day 2: <Link to="/carousel">Basic Carousel</Link>
        </li>
        <li>
          Day 3: <Link to="/inputdatatotable">Input Data To Table</Link>
        </li>
        <li>
          Day 5: <Link to="/basicReducer">Learning Basic Reducer</Link>
        </li>
        <li>
          Day 6: <Link to="/filterdropdown">Filter Dropdown</Link>
        </li>
        <li>
          Day 7: <Link to="/sortUsingDropdown">Sort Using Dropdown</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
