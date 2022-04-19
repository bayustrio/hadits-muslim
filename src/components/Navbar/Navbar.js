import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [bar, setBar] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1>Hadits.co</h1>
        </Link>

        <ul className={bar ? "mobile": "desktop"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/hadits">Hadits</Link>
          </li>
        </ul>
        <div onClick={() => setBar(!bar)} className="menu">
          {bar ? <FaTimes /> : <HiMenu />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
