import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';

const fontCards = []

ReactDOM.render(
  <Router>
    <App fontCards={fontCards}/>
  </Router>,
   document.getElementById('root'));

