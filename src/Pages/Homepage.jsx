import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "../components/Contact Component/Contact";
import DummyData from "../components/DummyData";
import Experience from "../components/Experience Components/Experience";
import Hero from "../components/Hero Component/Hero";
import Assignments from "../components/Portfolio Component/Portfolio";
import Error from "./Error";

const Homepage = ({ darkMode }) => {
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Routes>
          <Route path="/portfolio-vite/experience/" element={<Experience />} />
          <Route path="/portfolio-vite/" element={<Hero />} />
          <Route
            path="/portfolio-vite/assignments/"
            element={<Assignments />}
          />
          <Route path="/portfolio-vite/contact/" element={<Contact />} />
          <Route path="/portfolio-vite/dummydata/" element={<DummyData />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Homepage;
