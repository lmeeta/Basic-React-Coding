import React from "react";
import TableUsingMap from "./Daily Practice/TableUsingMap/TableUsingMap";
import { Routes, Route } from "react-router-dom";
import BasicCarousel from "./Daily Practice/BasicCarousel/BasicCarousel";
import Home from "./Daily Practice/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableUsingMap />} />
        <Route path="/carousel" element={<BasicCarousel />} />
      </Routes>
    </>
  );
};

export default App;
