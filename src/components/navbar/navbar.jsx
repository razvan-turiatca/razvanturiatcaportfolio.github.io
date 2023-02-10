import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaReact } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { navMenus } from './navmenus'

import './navbar.scss'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div>
      <nav className="navbar">
        <div className="navbar--container">
          <Link to={'/'} className="navbar--container-logo">
            <FaReact size={30} />
          </Link>
          <ul
            className={
              showSidebar
                ? 'navbar--container-menu active'
                : 'navbar--container-menu '
            }
          >
            {navMenus.map((item, id) => {
              const { label, to } = item

              return (
                <li key={id} className="navbar--container-menu-item">
                  <Link to={to} className="navbar--container-menu-item-links">
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div
            className="nav-icon"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
