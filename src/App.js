import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faBorderAll, faList, faRedo, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './styles/styles.scss';
import Header from './components/Header'
import FontNav from './components/FontNav'
// import FontCards from './components/FontCards'
import Footer from './components/Footer'
import FontCard from './components/FontCard'

import fontService from './services/fonts'

library.add(faCircle, faBorderAll, faList, faRedo, faPlusCircle )

const App = (props) => {
  const [fontCards, setFontCards] = useState([])
  const [fontTextInput, setFontTextInput] = useState('')
  const [fontSize, setFontSize] = useState('20px')
 
  useEffect(() => {
    fontService
      .getAll()
      .then(initialFonts => {
        setFontCards(initialFonts)})
  }, []) 

         
  // load more fonts on page scroll
  window.addEventListener('scroll',  () => {
    
    if (fontCards.length !== 0) {
      fontService.loadMoreFonts(fontCards)
    }
    
  })

  const cardsToShow = () => {
    
    return(
    
    fontCards.map((font, index) => 
      <FontCard font={font} 
                text={fontTextInput}
                fontSize={fontSize}
                key={index}
                 />
    )
  )}
  
  
  const handleTextInputChange = (event) => {
    setFontTextInput(event.target.value)
  }
  
  const handleFontSizeChange = (event) => {
     setFontSize(event.target.value)   
  }

  return(
   <>
    <Header />
    <main>
      <FontNav textChange={handleTextInputChange}
              fontSizeChange={handleFontSizeChange} 
                />
      {cardsToShow()}
    </main>
      <Footer />
   </>
 )
}

export default App;
