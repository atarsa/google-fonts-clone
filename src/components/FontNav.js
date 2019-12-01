import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontNav = ( {textChange} ) => {

  return(
    <div className="nav-container">
     
      <input className="nav-container__input nav-container--search"
        placeholder="Search fonts"
      />
      <input className="nav-container__input nav-container--type"
        placeholder="Type something"
        onChange={textChange}
      />
      <select className="nav-container__select">
        <option value="20">20px</option>
        <option value="24">24px</option>
        <option value="32">32px</option>
        <option value="40">40px</option>
      </select>
      <div className="nav-container__toggle-mode">
        <FontAwesomeIcon icon="circle" />
        <FontAwesomeIcon icon="circle" className="white" />
      </div>
      <div className="nav-container__toggle-layout">
          <FontAwesomeIcon icon="list" />
          <FontAwesomeIcon icon="border-all" />
      </div>
      <div className="nav-container__reset">
        <FontAwesomeIcon icon="redo" />
      </div>
    </div>
  )
}
export default FontNav