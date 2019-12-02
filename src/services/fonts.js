import axios from 'axios'

const API_KEY = 'AIzaSyBgtUnQZV7K1ZhgA3l4C9N523JitFrALoM' 
const baseUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`

console.log(baseUrl);
const getAll = () => {
  const request =  axios.get(baseUrl, {})
  return request.then( response => response.data.items)
}


export default {
  getAll
}
