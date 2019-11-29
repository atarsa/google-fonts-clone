import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faBorderAll, faList, faRedo } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header'
import FontNav from './components/FontNav'
import Footer from './components/Footer'

library.add(faCircle, faBorderAll, faList, faRedo)

const App = () => {
 return(
   <>
   <Header />
   <main>
    <FontNav />
    {/* <FontCards /> */}
   </main>
    <Footer />
   </>
 )
}

export default App;
