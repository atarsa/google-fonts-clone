import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontCard = ( {font, text, fontSize, handlePlusIconClick} ) => {
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
        <FontAwesomeIcon icon="plus-circle" onClick={() => handlePlusIconClick(font)} />
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