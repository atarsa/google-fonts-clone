import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faBorderAll, faList, faRedo, faPlusCircle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/styles.scss';
import Header from './components/Header'
import FontNav from './components/FontNav'
// import FontCards from './components/FontCards'
import Footer from './components/Footer'
import FontCard from './components/FontCard'

import fontService from './services/fonts'

// add font awsome icons to the 'library' as per docs
library.add(faCircle, faBorderAll, faList, faRedo, faPlusCircle, faArrowCircleUp )

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
                key={font}
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
    setShowAll(true)
    setFontSize('20px')
    setFontTextInput('')
    // reset FontNav
    document.querySelector('.nav-container--search').value = ''
    document.querySelector('.nav-container--type').value = ''
    document.querySelector('.nav-container__select').value = '20px'
  }

  const handleLayoutIconClick = (e) => {
    console.log(e.target)
    const cardsContainer = document.querySelector('.cards-container')
    
    if (e.target.classList.contains('fa-border-all') ){
      console.log('should show grid')
      // Show cards as grid
      if (cardsContainer.classList.contains('flex')){
        cardsContainer.classList.remove('flex')
      }
      cardsContainer.classList.add('grid')
      document.querySelector('.grid-icon').style.display = 'none'
      document.querySelector('.list-icon').style.display = 'block'
      
    } else if (e.target.classList.contains('fa-list') ){
      console.log('should show list')
      // Show cards as list
      if (cardsContainer.classList.contains('grid')){
        cardsContainer.classList.remove('grid')
      }
      cardsContainer.classList.add('flex')
      document.querySelector('.grid-icon').style.display = 'block'
      document.querySelector('.list-icon').style.display = 'none'
    }
  }

  return(
   <>
    <Header />
    <main>
      
      <FontNav textChange={handleTextInputChange}
              fontSizeChange={handleFontSizeChange}
              fontSearchChange={handleFontSearchInputChange}
              resetBtnClick={handleResetBtnClick}
              layoutIconClick={handleLayoutIconClick} 
                />

      <div className="cards-container grid">
        {/* cards */}
        {cardsToShow(fontsToShow)}
        {/* back to top button */}
        <div className="back-to-top-btn" >
          <FontAwesomeIcon icon="arrow-circle-up" className="back-to-top-btn__icon" />
          <span className="back-to-top-btn__info">Return to top</span>
        </div>
      </div>
    </main>
      <Footer />
   </>
 )
}

 // window event listeners
 window.addEventListener('scroll', () => {
  // get arrow up icon container
  const arrowUp = document.querySelector('.back-to-top-btn')
  if (window.pageYOffset > 100){
    arrowUp.style.display = 'flex'
    
    // add click event to the btn if visible
    arrowUp.addEventListener('click', () => {
       window.scrollTo(window.pageYOffset, 0)
    })


  } else {
    arrowUp.style.display = 'none'
  }
  
})

export default App;
