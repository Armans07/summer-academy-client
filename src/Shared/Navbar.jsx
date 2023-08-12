import React, { useContext, useState } from 'react';
import logo from '../assets/sports-removebg-preview.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import DarkLightMood from '../Pages/Home/DarkLightMood';
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-400 px-4 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-14 w-16" alt="Logo" />
        <span className="font-semibold text-black">Academy</span>
      </Link>
      <button
        onClick={handleMenuToggle}
        className="lg:hidden p-2 rounded-md text-orange-700"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <ul
        className={`${isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-4`}
      >
        <li >
          <Link to="/" className="font-semibold text-black hover:text-white" onClick={handleMenuToggle}>
            Home
          </Link>
        </li>
        <FaAngleRight ></FaAngleRight>
        <li>
          <Link to="/instructors" className="font-semibold text-black hover:text-white" onClick={handleMenuToggle}>
            Instructors
          </Link>
        </li>
        <FaAngleRight></FaAngleRight>
        <li>
          <Link to="/classes" className="font-semibold text-black hover:text-white" onClick={handleMenuToggle}>
            Classes
          </Link>
        </li>
        <FaAngleRight></FaAngleRight>
        <li>
          <Link to="/dashboard" className="font-semibold text-black hover:text-white" onClick={handleMenuToggle}>
            Dashboard
          </Link>
        </li>
        <FaAngleRight></FaAngleRight>
        <li>
          <Link to="/contact" className="font-semibold text-black hover:text-white" onClick={handleMenuToggle}>
            Contact
          </Link>
        </li>
       
      </ul>
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
            className="bg-black text-white hover:bg-orange-600 font-semibold rounded-lg text-sm px-4 py-2"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className=" bg-black text-white hover:bg-orange-600 font-semibold rounded-lg text-sm px-4 py-2"
            >
              Login
            </button>
          </Link>
        )}
        
        <DarkLightMood />
      </div>
    </nav>
  );
};

export default Navbar;





