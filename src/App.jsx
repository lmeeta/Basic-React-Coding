import React from "react";
import TableUsingMap from "./Daily Practice/TableUsingMap/TableUsingMap";
import { Routes, Route } from "react-router-dom";
import BasicCarousel from "./Daily Practice/BasicCarousel/BasicCarousel";
import Home from "./Daily Practice/Home/Home";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tableusingmap">
                  Day 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/carousel">
                  Day 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tableusingmap" element={<TableUsingMap />} />
        <Route path="/carousel" element={<BasicCarousel />} />
      </Routes>
    </>
  );
};

export default App;
