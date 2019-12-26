import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY 
const baseUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`


const getAll = async () => {
  const response=  await axios.get(baseUrl, {})
  
  const fontFamilies = response.data.items.map(obj => obj.family)
  loadInitialFonts(fontFamilies)
  return fontFamilies
  
}

// !Load all fonts 
// !not the best approach, needs optimisation
const loadInitialFonts = (fonts) => {
  let fontsNames = ''
  for (let i =0; i < fonts.length; i++){
    
    let fontName = fonts[i].split(' ').join('+') 
    fontsNames += `${fontName}|` 
  }
  // create link element and add it to index.html head  
  createLinkElm(fontsNames)
}


const createLinkElm = (fontsNames) => {
  const baseUrl = "https://fonts.googleapis.com/css?family="
  
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.type = 'text/css'
  link.href = baseUrl + fontsNames
  document.head.appendChild(link)
}


export default {
  getAll
}
