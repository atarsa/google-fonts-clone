import React from 'react'

const FontNav = () => {

  return(
    <div className="container">
     
      <input
        placeholder="Search fonts"
      />
      <input 
        placeholder="Type something"
      />
      <select>
        <option value="20">20</option>
        <option value="24">24</option>
        <option value="32">32</option>
        <option value="40">40</option>
      </select>
      <div className="toggleMode">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="toggleLayout">
          {/* grid/ layout icon */}
      </div>
      <div className="reset">
        {/* reset icon */}
      </div>
    </div>
  )
}
export default FontNav