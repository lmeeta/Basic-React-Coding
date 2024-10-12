import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Daily Activities</h1>
      <div className="divStyle">
        <ul className="ulStyle">
          <li>
            Day 1:
            <Link to="/tableusingmap" className="linkStyling">
              Table Using Map
            </Link>
          </li>
          <li>
            Day 2:
            <Link to="/carousel" className="linkStyling">
              Basic Carousel
            </Link>
          </li>
          <li>
            Day 3:
            <Link to="/inputdatatotable" className="linkStyling">
              Input Data To Table
            </Link>
          </li>
          <li>
            Day 4:
            <Link to="/propspassing" className="linkStyling">
              Props Passing Parent--Child
            </Link>
          </li>
          <li>
            Day 5:{" "}
            <Link to="/basicReducer" className="linkStyling">
              Learning Basic Reducer
            </Link>
          </li>
          <li>
            Day 6:{" "}
            <Link to="/filterdropdown" className="linkStyling">
              Filter Dropdown
            </Link>
          </li>
          <li>
            Day 7:{" "}
            <Link to="/sortUsingDropdown" className="linkStyling">
              Sort Using Dropdown
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
