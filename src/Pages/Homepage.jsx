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
          <Route path="/portfolio/" element={<Hero />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/assignments" element={<Assignments />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/dummydata" element={<DummyData />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Homepage;
