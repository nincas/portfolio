import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function navbar() {
  return (
    <div className="navbar">
        <div className="brand-container"><Link className="brand link" to="/">NNOCSUPNN</Link></div>
        <div className="links">
            <Link className="link" to="/projects">PROJECTS</Link>
            <Link className="link" to="/about">ABOUT</Link>
            <Link className="link" to="/contact">CONTACT</Link>
        </div>
      </div>
  )
}
