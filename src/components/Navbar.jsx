import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className="nav" id="nav_bar">
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" onClick={() => navigate('/home')} />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
        <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
          <li><NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</NavLink></li>
          <li><NavLink to="/table" onClick={() => setMenuOpen(false)}>Table</NavLink></li>
          <li><NavLink to="/profile" onClick={() => setMenuOpen(false)}>User Profile</NavLink></li>
          <li><NavLink to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
