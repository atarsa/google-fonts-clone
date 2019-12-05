import axios from 'axios'

const API_KEY = 'AIzaSyBgtUnQZV7K1ZhgA3l4C9N523JitFrALoM' 
const baseUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`


const getAll = async () => {
  const response=  await axios.get(baseUrl, {})
  
  const fontFamilies = response.data.items.map(obj => obj.family)
    loadInitialFonts(fontFamilies)
  return fontFamilies
  
}

let index = 0
let indexEnd = 10 // load 10 most popular fonts

const loadInitialFonts = (fonts) => {
  
  let fontsNames = ''
  for (  index; index <= indexEnd; index++){
    let fontName = fonts[index].split(' ').join('+') 
    fontsNames += `${fontName}|` 
  }
  
  // create link element and add it to index.html head  
  createLinkElm(fontsNames)
}

const loadMoreFonts = (fonts) => {
  
 
  let fontsNames = ''
  
  for (index; index <= indexEnd; index++){
    let fontName = fonts[index].split(' ').join('+') 
    fontsNames += `${fontName}|` 
  }
  indexEnd += 3 // load extra 3 fonts 
  
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
  getAll,
  loadMoreFonts
}
