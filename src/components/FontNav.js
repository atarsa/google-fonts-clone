import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontNav = () => {

  return(
    <div className="container">
     
      <input
        placeholder="Search fonts"
      />
      <input 
        placeholder="Type something"
      />
      <select>
        <option value="20">20px</option>
        <option value="24">24px</option>
        <option value="32">32px</option>
        <option value="40">40px</option>
      </select>
      <div className="toggleMode">
        <FontAwesomeIcon icon="circle" />
        <FontAwesomeIcon icon="circle" className="white" />
      </div>
      <div className="toggleLayout">
          <FontAwesomeIcon icon="list" />
          <FontAwesomeIcon icon="border-all" />
      </div>
      <div className="reset">
        <FontAwesomeIcon icon="redo" />
      </div>
    </div>
  )
}
export default FontNav