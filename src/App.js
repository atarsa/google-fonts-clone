import React, { useState, useEffect } from 'react';
import { 
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faBorderAll, faList, faRedo, faPlusCircle, faArrowCircleUp, faBars, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LazyLoad from 'react-lazyload'

import './styles/styles.scss';
import Header from './components/Header'
import FontNav from './components/FontNav'
import Footer from './components/Footer'
import LoadingCard from './components/LoadingCard'
import FontCard from './components/FontCard'
import About from './components/About'
import Notification from './components/Notification'

import fontService from './services/fonts'

// add font awsome icons to the 'library' as per docs
library.add(faFillDrip, faBorderAll, faList, faRedo, faPlusCircle, faArrowCircleUp, faBars, faTrashAlt )

const App = (props) => {
  let location = useLocation()
  const [fontCards, setFontCards] = useState([])
  const [filteredFonts, setFiltredFonts] = useState([])
  const [favouritedFonts, setFavouritedFonts] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [fontTextInput, setFontTextInput] = useState('')
  const [fontSize, setFontSize] = useState('20px')
  const [notification, setNotification] = useState('')
 
  useEffect(() => {
    fontService
      .getAll()
      .then(initialFonts => {
        setFontCards(initialFonts)})
  }, []) 

  // get favourites fonts from local storage
  useEffect(() => {
    setFavouritedFonts( fontService.getFontsFromStorage() )
  }, [])
    
  // set fonts to show depending on pathname
  let fontsToShow = []
  if (location.pathname === '/'){
   fontsToShow = showAll
      ? fontCards
      : filteredFonts
  } else if (location.pathname === '/favourites'){
    fontsToShow = showAll
      ? favouritedFonts
      : filteredFonts
  }
  
   
  const cardsToShow = (fonts) => {
    
    return(
    
    fonts.map((font) => 
      <LazyLoad key={font} placeholder={<LoadingCard font={font} />}>

        <FontCard font={font} 
                  text={fontTextInput}
                  fontSize={fontSize}
                  key={font}
                  handlePlusIconClick={handlePlusIconClick}
                  handleDeleteIconClick={handleDeleteIconClick}
                  
         />
      </LazyLoad>
      
    )
  )}
  
  // Add font to favourites
  const handlePlusIconClick = ( font ) =>{
    // TODO: check if font already in favourites
    if (favouritedFonts.includes(font)){
          
      showNotification(`${font} font already in favourites!`)
    } else {
      
      setFavouritedFonts(favouritedFonts => favouritedFonts.concat(font))
      fontService.addFontToStorage(font)
      showNotification(`${font} font added to favourites!`)
    }   
  }

  const handleDeleteIconClick = (font) => {
    let array = [...favouritedFonts]
    
    array.forEach((favFont, index) => {
      if (favFont === font){
        array.splice(index, 1)
      }
    })
    
    setFavouritedFonts(array)
    
    fontService.removeFontFromStorage(font)
    showNotification(`${font} font deleted from favourites!`)
  }
  const handleTextInputChange = (event) => {
    setFontTextInput(event.target.value)
  }
  
  const handleFontSizeChange = (event) => {
     setFontSize(event.target.value)   
  }

  const handleFontSearchInputChange = (event) => {
    const input = event.target.value.toLowerCase()
    
    // sets fonts to filter depending on pathname
    let fontsToFilter = []
    if (location.pathname === '/'){
      fontsToFilter = fontCards
     } else if (location.pathname === '/favourites'){
       fontsToFilter = favouritedFonts
     }

    if (input){
      setFiltredFonts(fontsToFilter.filter(name =>{ 
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

  const showNotification = (msg) => {
    setNotification(msg)
    setTimeout(()=> {
        setNotification('')
      }, 5000) 
  }

  return(
   <div className="container">
     
      <Header />
      <main>
        
        <FontNav textChange={handleTextInputChange}
                fontSizeChange={handleFontSizeChange}
                fontSearchChange={handleFontSearchInputChange}
                resetBtnClick={handleResetBtnClick}
        />
        <Notification notification={notification} />
        <Switch>
          <Route exact path="/">
              <div className="cards-container grid-view catalog-view">
                {cardsToShow(fontsToShow, 'catalog')}
              </div>
            </Route >
          <Route path="/favourites" >
              <div className="cards-container grid-view favourites-view">
                {cardsToShow(fontsToShow, 'favourites')}
              </div>
          </Route>
        
          <Route path="/about" >
            <About />
          </Route> 

        </Switch>

        {/* back to top button */}
        <div className="back-to-top-btn" >
            <FontAwesomeIcon icon="arrow-circle-up" className="back-to-top-btn__icon" />
            <span className="tooltip back-to-top-btn__info">Return to top</span>
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
