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
  const [filteredFonts, setFiltredFonts] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [fontTextInput, setFontTextInput] = useState('')
  const [fontSize, setFontSize] = useState('20px')
 
  useEffect(() => {
    fontService
      .getAll()
      .then(initialFonts => {
        setFontCards(initialFonts)})
  }, []) 

  const fontsToShow = showAll
   ? fontCards
   : filteredFonts
         
   const cardsToShow = (fonts) => {
    
    return(
    
    fonts.map((font, index) => 
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

  const handleFontSearchInputChange = (event) => {
    const input = event.target.value.toLowerCase()

    if (input){
      setFiltredFonts(fontCards.filter(name =>{ 
        name = name.toLowerCase()
        return name.includes(input)
        })
      )
      setShowAll(false)
     
    } else {
      setShowAll(true)
    }
  }
  
  const handleResetBtnClick = (e) => {
    console.log(e.target)
    setShowAll(true)
    setFontSize('20px')
    setFontTextInput('')
  }

  return(
   <>
    <Header />
    <main>
      <FontNav textChange={handleTextInputChange}
              fontSizeChange={handleFontSizeChange}
              fontSearchChange={handleFontSearchInputChange}
              resetBtnClick={handleResetBtnClick} 
                />
      {cardsToShow(fontsToShow)}
    </main>
      <Footer />
   </>
 )
}

export default App;
