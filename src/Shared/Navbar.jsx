

import React, { useContext, useState } from 'react';
import logo from '../assets/31746352_7799135-removebg-preview.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import DarkLightMood from '../Pages/Home/DarkLightMood';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Summer champ
          </span>
        </a>
        

        {/* Mobile Menu */}
        <div
          className={`items-center justify-between w-full md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                onClick={handleMenuToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                onClick={handleMenuToggle}
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                onClick={handleMenuToggle}
              >
                Classes
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                  onClick={handleMenuToggle}
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 "
                onClick={handleMenuToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
         
        </div>

        {/* Desktop Menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex font-medium space-x-8">
            <li>
              <Link to="/" className="text-gray-900 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/instructors" className="text-gray-900 dark:text-white">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes" className="text-gray-900 dark:text-white">
                Classes
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard" className="text-gray-900 dark:text-white">
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/contact" className="text-gray-900 dark:text-white">
                Contact
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div className="flex gap-2 items-center">
          {user && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              title={user.displayName}
              className="w-8 h-8 rounded-full"
            />
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          )}
          <DarkLightMood></DarkLightMood>

          {/* Hamburger Icon */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M19 12H5M19 6H5M19 18H5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



