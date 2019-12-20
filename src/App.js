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
   <div className="container">
    <Header />
    <main>
      
      <FontNav textChange={handleTextInputChange}
              fontSizeChange={handleFontSizeChange}
              fontSearchChange={handleFontSearchInputChange}
              resetBtnClick={handleResetBtnClick}
              layoutIconClick={handleLayoutIconClick} 
                />

      <div className="cards-container grid-view">
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
   </div>
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
