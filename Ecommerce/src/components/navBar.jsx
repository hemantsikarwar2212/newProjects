import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPinIcon, ChevronDown, ShoppingCart } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";


export const NavBar = () => {
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section  */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="text-4xl font-bold">
              <span className="text-green-400 "> MY</span>Store
            </h1>
          </Link>
          <div className="flex text-red-300 cursor-pointer items-center">
            <MapPinIcon />
            <span className="font-semibold">
              {location ? <div></div> : "add address"}
            </span>
            <ChevronDown />
          </div>
        </div>
        {/* menu section */}
        <nav className="flex  gap-5 items-center">
          <ul className="flex justify-between items-center gap-5 text-1xl font-2xl font-serif">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-500 "
                    : "text-black"
                }`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-500 "
                    : "text-black"
                }`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-500 "
                    : "text-black"
                }`
              }
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-500 "
                    : "text-black"
                }`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="bg-green-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className='bg-green-600 text-white px-3 py-1 cursor-pointer rounded-md'/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};
