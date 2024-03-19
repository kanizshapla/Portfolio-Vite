import PropTypes from "prop-types"; // Import PropTypes
import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "../components/Contact Component/Contact";
import DummyData from "../components/DummyData";
import Experience from "../components/Experience Components/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero Component/Hero";
import Assignments from "../components/Portfolio Component/Portfolio";
import Error from "./Error";

const Homepage = ({ darkMode }) => {
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Routes>
          <Route path="/Portfolio-Vite/Experience" element={<Experience />} />
          <Route path="/Portfolio-Vite/" element={<Hero />} />
          <Route path="/Portfolio-Vite/Assignments" element={<Assignments />} />
          <Route path="/Portfolio-Vite/Contact" element={<Contact />} />
          <Route path="/Portfolio-Vite/Dummydata" element={<DummyData />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

Homepage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Homepage;
