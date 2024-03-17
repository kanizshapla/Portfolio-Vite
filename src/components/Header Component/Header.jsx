import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white">
      <Router>
        <nav className="flex justify-between items-center p-5">
          <h1 className="text-lg">
            <NavLink reloadDocument to="/portfolio-vite/">
              Home
            </NavLink>
          </h1>
          <div className="py-5">
            <ul className="flex justify-between items-center gap-10 p-5">
              <li>
                <NavLink
                  reloadDocument
                  to="/portfolio-vite/experience/"
                  className=" [&.active]:bg-gray-300 block py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/portfolio-vite/assignments/"
                  className=" [&.active]:bg-gray-300 block py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink reloadDocument to="/portfolio-vite/contact/">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink reloadDocument to="/portfolio-vite/dummydata/">
                  Dummy Data
                </NavLink>
              </li>
            </ul>
          </div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdNightsStay className="text-2xl cursor-pointer" />
            ) : (
              <MdWbSunny className="text-2xl cursor-pointer" />
            )}
          </button>
        </nav>
      </Router>
    </header>
  );
};

export default Header;
