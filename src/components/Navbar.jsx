import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-light p-4 shadow-md">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#home" className="text-lg hover:text-gray-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-lg hover:text-gray-400 transition">
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-lg hover:text-gray-400 transition"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
