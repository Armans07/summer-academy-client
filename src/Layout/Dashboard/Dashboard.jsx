

import { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed right-0 top-0 p-4 mt-4 mr-4 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={toggleDrawer}
      >
        Open Menu
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isOpen ? 'sm:w-64' : 'sm:w-16'
        }`}
      >
        {/* Navigation items */}
        <nav className="flex flex-col justify-start p-4">
          <a className="py-2 px-4" href="#home">
            Home
          </a>
          <a className="py-2 px-4" href="#about">
            About
          </a>
          <a className="py-2 px-4" href="#services">
            Services
          </a>
          <a className="py-2 px-4" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
