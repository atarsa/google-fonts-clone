import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import FontCard from './FontCard'

describe('<FontCard />', () => {

  const fontInfo = {
    family: "Roboto",
    author: "Christian Roberston"
  }

  const text = "Then came the night of the first falling star."
  
  test('renders content when font info is available from user input', () => {

      const component = render(
        <FontCard fontInfo={fontInfo} text={text} />
      )      

      const textDiv = component.container.querySelector('.fontCard--text')
      expect(textDiv).toHaveTextContent('Then came the night of the first falling star.')
      
      const fontNameDiv = component.container.querySelector('.font--name')
      expect(fontNameDiv).toHaveTextContent('Roboto')

      const fontAuthorDiv = component.container.querySelector('.font--author')
      expect(fontAuthorDiv).toHaveTextContent('Christian Roberston')
  })

  test('renders default text when no user input', () => {

    const component = render(
      <FontCard fontInfo={fontInfo} text='' />
    )
    component.debug()  
    const textDiv = component.container.querySelector('.fontCard--text')
    expect(textDiv).toHaveTextContent('Here comes the sun')
  
    const fontNameDiv = component.container.querySelector('.font--name')
    expect(fontNameDiv).toHaveTextContent('Roboto')

    const fontAuthorDiv = component.container.querySelector('.font--author')
    expect(fontAuthorDiv).toHaveTextContent('Christian Roberston')
  })

  // test('card\'s content is written in the font specified on the card    ', () => {


  // })

  // test('save font to local storage', () => {


  // })



})