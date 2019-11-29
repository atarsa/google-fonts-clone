import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontCard = () => {
  return(
    <div className="fontCard">
      <div className="fontCard__header">
        <div>
          <div className="font--name">Roboto</div>
          <div className="font--author">Christian Roberston</div>
        </div>
        <FontAwesomeIcon icon="plus-circle" />
      </div>
      <div className="fontCard__main">
        <div className="fontCard--text">
          Then came the night of the first falling star.
        </div>
      </div>
    </div>
  )
}


export default FontCard