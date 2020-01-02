import React from 'react'
import { Link } from 'react-router-dom'
const About = () => (
  <div className="about">
    <p>
      This website is a clone of <a href="https://fonts.google.com/">Google Fonts</a>.
    </p>
    <p>
    A Front-End is written in React that fetches fonts data from  
      <a href="https://developers.google.com/fonts/docs/getting_started" > Google API </a>.
    <br />
    All available fonts can be found on  
    <Link to="/"> main/catalog</Link> page.
    <br />
    Cards are displayed by font popularity.
    The User can then search for the specific font, change the font size and text displayed on all font cards. The user can also add fonts to favourites - the fonts can be then found on <Link to="favourites">favourites</Link> page.
    </p>
    <p>The main purpose of this project was to practise React. 
      <br />
    The source code can be found on <a href="https://github.com/atarsa/google-fonts-clone">GitHub</a>.


    </p>

    
  </div>
)
export default About