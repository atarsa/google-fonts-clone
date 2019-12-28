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
    
    let newFont = new FontFace(fontObj.family, `url(${fontUrl})`)
    
    newFont.load().then(loadedFont => {
      console.log('loaded font ', loadedFont);
      document.fonts.add(loadedFont)
    }).catch(error => {
      console.log(error)
    });

  }
)}


export default {
  getAll
}
