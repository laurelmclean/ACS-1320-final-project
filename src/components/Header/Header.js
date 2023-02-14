import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../Randomize/Randomize'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Canadian Music</h1>
        <div className="Title-Subtitle">Check out some of the best bands in Canada!</div>

        <div>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">Browse</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
        </div>
        <div>
          <RandomSpace />
        </div>

      </header>
    </div>
  )
}

export default Title;