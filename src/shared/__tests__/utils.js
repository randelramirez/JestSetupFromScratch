import {getFormattedValue} from '../utils'

test('it formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
