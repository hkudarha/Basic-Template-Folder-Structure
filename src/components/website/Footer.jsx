import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { UnauthenticatedRoutes } from "../../constants/router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyWebsite</h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering your digital journey with creativity, technology, and innovation.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to={UnauthenticatedRoutes.HOME}
                className="hover:text-purple-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={UnauthenticatedRoutes.ABOUT}
                className="hover:text-purple-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={UnauthenticatedRoutes.CONTACT}
                className="hover:text-purple-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Harshita Kudarha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
