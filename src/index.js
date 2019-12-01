import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// Start with hardcoded cards;
// TODO: implement services to get cards info from google API
const fontCards = [
  {
    family: "Roboto",
    author: "Christian Roberston"
  },
  {
    family: "Open Sans",
    author: "Steve Matteson"
  },
  {
    family: "Lato",
    author: "Lukasz Dziedzic"
  }
]

ReactDOM.render(<App fontCards={fontCards}/>, document.getElementById('root'));

