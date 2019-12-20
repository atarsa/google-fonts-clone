import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontNav = ( {textChange, fontSizeChange, fontSearchChange, resetBtnClick, layoutIconClick } ) => {

  const handleModeToggleClick = (e) => {
    const body = document.querySelector('body')
    // TODO Refactor to use state ?? 
    if (body.classList.contains('light-mode')){
      body.classList.remove('light-mode')
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
      body.classList.add('light-mode')
    }

  }

  return(
    <div className="nav-container">
     
      <input className="nav-container__input nav-container--search"
        placeholder="Search fonts"
        onChange={fontSearchChange}
      />
      <input className="nav-container__input nav-container--type"
        placeholder="Type something"
        onChange={textChange}
      />
      <select className="nav-container__select"
        onChange={fontSizeChange}>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="32px">32px</option>
        <option value="40px">40px</option>
      </select>
      <div className="nav-container__toggle-mode">
        <FontAwesomeIcon icon="circle" onClick={() => handleModeToggleClick()}/>
  
      </div>
      <div className="nav-container__toggle-layout" onClick={layoutIconClick}>
          <div className="list-view-icon">
            <FontAwesomeIcon icon="list" />
          </div>
          <div className="grid-view-icon">
            <FontAwesomeIcon icon="border-all" />
          </div>
      </div>    
    
      <div className="nav-container__reset" onClick={resetBtnClick}>
        <FontAwesomeIcon icon="redo" />
      </div>
    </div>
  )
}
export default FontNav