import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import MyContainer from "./MyCointainer";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-green-400 via-pink-300 to-blue-500 shadow-sm">
      <MyContainer>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <span>@</span> Prince Asadul
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
