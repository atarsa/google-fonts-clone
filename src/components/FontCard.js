import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontCard = ( {font, text, fontSize, handlePlusIconClick,handleDeleteIconClick} ) => {
  // if user text input empty then use default
  text = text ? text : 'Here comes the sun'
  
  // add font styles
  const textStyle = {
    fontSize: fontSize,
    fontFamily: `"${font}"`
  }

    
  return(
    <div className="fontCard">
      <div className="fontCard__header">
        <div className="font--name">{font}</div>
        <div className="fontCard-icon add-font">
          <FontAwesomeIcon icon="plus-circle" onClick={() => handlePlusIconClick(font)} />
          <span className="tooltip fontCard-icon__info">Add font to favourites</span>
        </div>
        <div className="fontCard-icon delete-font">
          <FontAwesomeIcon icon="trash-alt" onClick={() => handleDeleteIconClick(font)} />
          <span className="tooltip fontCard-icon__info">Remove font from favourites</span>
        </div>
        
      </div>
      <div className="fontCard__main">
        <div className="fontCard--text" style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  )
}


export default FontCard