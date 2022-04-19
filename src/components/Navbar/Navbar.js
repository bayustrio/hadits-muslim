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
          {bar ? (
            <>
            <li onClick={() => setBar(!bar)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setBar(!bar)}>
            <Link to="/hadits">Hadits</Link>
          </li>
          </>):(
                      <>
                      <li >
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/hadits">Hadits</Link>
                    </li>
                    </>)
          }

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
