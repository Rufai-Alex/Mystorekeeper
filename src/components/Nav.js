import React, { useState } from "react";
import Logo from "../icons/Logo.png";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const [changeBg, setChangeBg] = useState(false);
  const chandbg = () => {
    console.log(window.scrollY);
  };
  const [open, setopen] = useState(true);
  const navigate = useNavigate();
  const hide = () => {
    setopen(!open);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap w-full py-2 lg:px-12 px-8">
      <div className="flex items-center flex-shrink-0 text-white ">
        <Link
          className="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <span className="text-2xl pl-2">
            <img src={Logo} alt="LOGO" className="h-16" />
          </span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={hide}
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto  pt-6 lg:pt-0 ${
          open ? "hidden  " : ""
        } `}
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center space-y-4 lg:space-y-0 space-x-8 font-medium   ">
          <li className="ml-8">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about"> About US </Link>
          </li>
          <li className="">
            {" "}
            <Link to="/features"> Features </Link>
          </li>
          <li className="">
            <Link to="/features/#pricing"> Princing </Link>
          </li>

          <button className="bg-white border border-black  p-2 rounded hover:bg-blue-400 hover:text-white hover:border-0">
            <Link to="/signUp">Get started</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
