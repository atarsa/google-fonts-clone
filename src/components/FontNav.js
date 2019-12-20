import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontNav = ( {textChange, fontSizeChange, fontSearchChange, resetBtnClick} ) => {

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

  const handleLayoutIconClick = (e) => {
    if (e.target.classList.contains('fa-border-all') ){
     // Show cards as grid
       toggleCardsLayout('grid-view')
       
   } else if (e.target.classList.contains('fa-list') ){
     // Show cards as list
     toggleCardsLayout('list-view')
   }
 }

 const toggleCardsLayout = layoutToShow => {
   const layoutToHide = layoutToShow === 'grid-view' ? 'list-view' : 'grid-view'
   const cardsContainer = document.querySelector('.cards-container')

   if (cardsContainer.classList.contains(layoutToHide)){
     cardsContainer.classList.remove(layoutToHide)
   }
   cardsContainer.classList.add(layoutToShow)

   document.querySelector(`.${layoutToShow}-icon`).style.display = 'none'
   document.querySelector(`.${layoutToHide}-icon`).style.display = 'block'

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
      <div className="nav-container__toggle-layout" onClick={(e) => handleLayoutIconClick(e)}>
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