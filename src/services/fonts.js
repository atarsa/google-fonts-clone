import axios from 'axios'
import FontFaceObserver from 'fontfaceobserver'

const API_KEY = process.env.REACT_APP_API_KEY 
const baseUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`


const getAll = async () => {
  const response=  await axios.get(baseUrl, {})
  
  console.log('All fonts ', response.data);
  createFontFaceObjs(response.data.items)
  
  // get all font families names
  const fontFamilies = response.data.items.map(obj => obj.family)
  //loadInitialFonts(fontFamilies)
  return fontFamilies  
}

// !Load all fonts 
// !not the best approach, needs optimisation
// fonts is as an array of fonts object as per API
const createFontFaceObjs = (fonts) => {
  fonts.forEach(fontObj => {
   
    // not all fonts have regular style
    // so in that case get url of the first font style available
    let fontUrl = fontObj.files.regular ? fontObj.files.regular : fontObj.files[Object.keys(fontObj.files)[0]]
    
    // create new style element with fontface declaration
    let newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode(`
      @font-face {
          font-family: "${fontObj.family}";
          src: local("${fontObj.family}"),
          url(${fontUrl}) ;
        }
       `
      ));

    document.head.appendChild(newStyle);
  }
)}

const loadFonts = fontFamilies => {
  let observers = [];

  fontFamilies.forEach(family => {
    let obs = new FontFaceObserver(family)
    observers.push(obs.load())
  })

  Promise.all(observers)
    .then(function(fonts) {
      fonts.forEach(function(font) {
        console.log(font.family + ' loaded');

      });
    })
    .catch(function(err, font) {
      console.warn('Some critical font are not available:', err);
    });
}

export default {
  getAll, 
  loadFonts
}
