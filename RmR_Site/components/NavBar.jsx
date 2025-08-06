import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Navigation Links */}
          <div className="flex space-x-8">
            <NavLink
              to={"/home"}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to={"/services"}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Services
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </NavLink>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-12 w-20 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">
                  <img
                    src="https://i.fbcd.co/products/original/truck-red-converted-bdbe7b1994e04d9723fe6301a0608409f3f3a40cc45c821455354c3ec2cf4425.jpg"
                    alt=""
                  />
                </span>
              </div>
              <span className="text-xl font-bold text-gray-800">RMR</span>
            </div>
          </div>

          {/* Right Side - Book a Truck Button */}
          <div>
            <NavLink className="bg-red-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
              Book a Truck
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Optional - for responsive design) */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
          <NavLink className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            Home
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            Services
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            Contact
          </NavLink>
          <NavLink className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center mt-2">
            Book a Truck
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
