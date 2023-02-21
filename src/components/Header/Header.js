import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Discover Music</h1>
        <div className="Title-Subtitle">Discover Canadian music and venues!</div>

        <div>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">Browse Bands</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/venues">Browse Venues</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title;