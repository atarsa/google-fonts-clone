import React from 'react'
import FontCard from './FontCard'

const FontCards = (fontCards) => {
  fontCards.forEach(card => 
    <FontCard cardInfo={card} />
    )
}


export default FontCards