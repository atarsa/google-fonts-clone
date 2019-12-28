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


export default {
  getAll
}
