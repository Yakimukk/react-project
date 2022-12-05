import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => (
  <header>
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="navbar-brand">
        Hacker News
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
          >
            Главная
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)