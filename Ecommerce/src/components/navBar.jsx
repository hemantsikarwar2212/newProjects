import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPinIcon, ChevronDown, ShoppingCart, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useLocation } from "../../context/LocationContext";


export const NavBar = () => {
  const {Location , getLocation , openDropDown,setopenDropDown} = useLocation();
   
  const toggleDropDown = () =>{
    setopenDropDown(openDropDown => !openDropDown);
  }
  // const location = false;
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
              {Location ? (
                <div className="-space-y-2">
                  <p>{Location.country}</p>
                  <p>{Location.state}</p>
                </div>
              ) : (
                "add address"
              )}
            </span>
            <ChevronDown onClick={toggleDropDown} />
          </div>
          {openDropDown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-grey-100 rounded-md ">
              <h1 className=" mb-4 rounded-md  text-xl flex justify-between">
                Change location
              <span onClick={toggleDropDown}>
                <X />
              </span>
              </h1>
              <button onClick={getLocation} className="rounded-md bg-green-500 text-white px-3 py-1 cursor-pointer hover:bg-green-500">detect location</button>
            </div>
          ) : null}
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
          {/* Cart  */}
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="bg-green-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          {/* Auth logic */}
          <div>
            <SignedOut>
              <SignInButton className="bg-green-600 text-white px-3 py-1 cursor-pointer rounded-md" />
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
