import React from 'react'
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
          <li><a href="index.html">CATALOG</a></li>
          <li><a href="index.html">FEATURED</a></li>
          <li><a href="index.html">ARTICLES</a></li>
          <li><a href="index.html">ABOUT</a></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
