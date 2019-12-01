import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontCard = ( {fontInfo, text, fontSize} ) => {
  // if user text input empty then use default
  text = text ? text : 'Here comes the sun'
  
  // add font styles
  const textStyle = {
    fontSize: fontSize,
    fontFamily: fontInfo.family
  }

  return(
    <div className="fontCard">
      <div className="fontCard__header">
        <div>
          <div className="font--name">{fontInfo.family}</div>
          <div className="font--author">{fontInfo.author}</div>
        </div>
        <FontAwesomeIcon icon="plus-circle" />
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