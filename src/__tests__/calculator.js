import React from 'react'
// import * as jestDom from '@testing-library/jest-dom' see jst.config: setupFilesAfterEnv

import {fireEvent, render} from '@testing-library/react'
import Calculator from '../calculator'

// expect.extend(jestDom)

test('renders', () => {
  render(<Calculator />)
})

test('the clear button swithces from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton.textContent).toBe('C')

  fireEvent.click(clearButton)
  expect(clearButton.textContent).toBe('AC')
})

test('the clear button swithces from AC to C when there is an entry (using jest-dom/extend-expect)', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
