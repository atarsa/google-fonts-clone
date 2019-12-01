import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FontNav from './FontNav'

describe('<FontNav />', () => {

  test('font size changes on user selection ', () => {

    const component = render(
      <FontNav />
    )

    const selectDiv = component.container.querySelector('select')
    




  })



})