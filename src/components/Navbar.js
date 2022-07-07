import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    }
    return (
    <nav className="Navbar">
        <div>
            <h2>SHAID</h2>
        </div>
        <ul>
            <li><Link style={linkStyle} to="/" >Socials</Link></li>
            <li><Link style={linkStyle} to="/streamingPlatforms">Streaming Platforms</Link></li>
            <li><Link style={linkStyle} to="/discography">Discography</Link></li>
            <li><Link style={linkStyle} to="/contactme">Contact Me</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar