import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthRoutes, UnauthenticatedRoutes } from "../../constants/router";

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
        <Link to="/" className="text-2xl font-bold text-purple-600">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-purple-600 font-medium ${
                    isActive ? "text-purple-600" : ""
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
            className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to={AuthRoutes.REGISTER}
            className="bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700"
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
                    `text-gray-700 hover:text-purple-600 font-medium ${
                      isActive ? "text-purple-600" : ""
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
                className="border border-purple-600 text-purple-600 px-5 py-2 rounded-md hover:bg-purple-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to={AuthRoutes.REGISTER}
                onClick={toggleMenu}
                className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
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
