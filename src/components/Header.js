import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header>
      <div className="brand">
        <a href="index.html">Favourite Google Fonts</a>
      </div>
      {/* Input to toggle menu for small devices */}
      <input id="toggle" type="checkbox" />
        <label className="toggle-container" htmlFor="toggle">
          <FontAwesomeIcon icon="bars" />
        </label>
      
      <nav className="nav">
        <ul>
          <li><Link to="/"> CATALOG </Link></li>
          <li><Link to="/favourites"> FAVOURITES </Link></li>
          
          <li><Link to="/about"> ABOUT </Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
