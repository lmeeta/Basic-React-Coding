import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Daily Activities</h1>
      <ul>
        <li>
          Day 1: <Link to="/table">Table Using Map</Link>
        </li>
        <li>
          Day 2: <Link to="/carousel">Basic Carousel</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
