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
          <Route path="/Portfolio-Vite/experience/" element={<Experience />} />
          <Route path="/Portfolio-Vite/" element={<Hero />} />
          <Route
            path="/Portfolio-Vite/assignments/"
            element={<Assignments />}
          />
          <Route path="/Portfolio-Vite/contact/" element={<Contact />} />
          <Route path="/Portfolio-Vite/dummydata/" element={<DummyData />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Homepage;
