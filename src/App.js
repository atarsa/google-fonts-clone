import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faBorderAll, faList, faRedo, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/styles.scss';
import Header from './components/Header'
import FontNav from './components/FontNav'
import FontCards from './components/FontCards'
import Footer from './components/Footer'

library.add(faCircle, faBorderAll, faList, faRedo, faPlusCircle )

const App = () => {
 return(
   <>
   <Header />
   <main>
    <FontNav />
    <FontCards />
   </main>
    <Footer />
   </>
 )
}

export default App;
