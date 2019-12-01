import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontCard = ( {fontInfo, text} ) => {
  // if user text input empty then use default
  text = text ? text : 'Here comes the sun'
  
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
        <div className="fontCard--text">
          {text}
        </div>
      </div>
    </div>
  )
}


export default FontCard