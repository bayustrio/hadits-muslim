import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
      <>
    <div className='navbar'>
      <Link to="/"><h1>Hadits.co</h1></Link>
            
            <ul className='desktop'>
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
    </div>
        <Outlet/>
    </>
  )
}

export default Navbar