import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
            <h1 className="logo">MyApp</h1>
            <div className="navItems">
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
