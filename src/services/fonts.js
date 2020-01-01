import axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY 
const baseUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`


const getAll = async () => {
  const response=  await axios.get(baseUrl, {})
  
  console.log('All fonts ', response.data);
  // create FontFace for each font from API
  createFontFaceObjs(response.data.items)
  
  // get all font families names
  const fontFamilies = response.data.items.map(obj => obj.family)
  return fontFamilies  
}

// fonts is as an array of font objects 
const createFontFaceObjs = (fonts) => {
  fonts.forEach(fontObj => {
    
    // get font url
    // not all fonts have regular style
    // so in that case get url of the first font style available
    let fontUrl = fontObj.files.regular ? fontObj.files.regular : fontObj.files[Object.keys(fontObj.files)[0]]
    
    // font url starts with 'http' which leads to "Blocked loading mixed active content" error
    // replace 'http' with 'https'
    fontUrl = fontUrl.replace('http', 'https')
    
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

const addFontToStorage = (font) => {
  let favFonts;
  // check if empty
  if (localStorage.getItem('favFonts') === null){
    favFonts = []
    favFonts.push(font);

    // set ls to favFonts
    localStorage.setItem('favFonts', JSON.stringify(favFonts))
  } else {
    // get fonts from ls
    favFonts = JSON.parse(localStorage.getItem('favFonts'))
    favFonts.push(font)

    localStorage.setItem('favFonts', JSON.stringify(favFonts))
  }
}

const getFontsFromStorage = () => {
  let favFonts

  if (localStorage.getItem('favFonts') === null){
    favFonts = [];
  } else {   
    favFonts = JSON.parse(localStorage.getItem('favFonts'));
  }
  return favFonts
}

export default {
  getAll,
  addFontToStorage,
  getFontsFromStorage
}
