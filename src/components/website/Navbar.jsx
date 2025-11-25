import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthRoutes, UnauthenticatedRoutes } from "../../constants/router";
import { MainContent } from "../../constants/maincontant";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { title: "Home", path: UnauthenticatedRoutes.HOME },
    { title: "About", path: UnauthenticatedRoutes.ABOUT },
    { title: "Contact", path: UnauthenticatedRoutes.CONTACT },
  ];

  return (
    <nav className="bg-white shadow-md sticky w-full z-50 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={MainContent.logo} alt="" className="w-[5rem]" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-secondary hover:text-primary font-medium ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to={AuthRoutes.LOGIN}
            className="border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to={AuthRoutes.REGISTER}
            className="bg-primary text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-secondary"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-secondary hover:text-primary font-medium ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

            <div className="flex flex-col gap-2 mt-3">
              <Link
                to={AuthRoutes.LOGIN}
                onClick={toggleMenu}
                className="border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to={AuthRoutes.REGISTER}
                onClick={toggleMenu}
                className="bg-primary text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
