import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faBorderAll, faList, faRedo, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/styles.scss';
import Header from './components/Header'
import FontNav from './components/FontNav'
import FontCards from './components/FontCards'
import Footer from './components/Footer'
import FontCard from './components/FontCard'

library.add(faCircle, faBorderAll, faList, faRedo, faPlusCircle )

const App = (props) => {
  const [fontCards, setFontCards] = useState(props.fontCards)
  const [fontTextInput, setFontTextInput] = useState('')
  
 
  const cardsToShow = () => (
    fontCards.map(card => 
      <FontCard fontInfo={card} text={fontTextInput} />
    )
  )
  
  const handleTextInputChange = (event) => {
    setFontTextInput(event.target.value)
  }
  

  return(
   <>
   <Header />
   <main>
    <FontNav textChange={handleTextInputChange} />
    {cardsToShow()}
   </main>
    <Footer />
   </>
 )
}

export default App;
