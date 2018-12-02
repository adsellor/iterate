import React from 'react'
import Button from '../../components/button'

describe('Button renders', () => {
  let button
  beforeEach(() => {
    button = mount(<Button>title</Button>)
  })
  describe('Button child component', () => {
    test('Correct child is passed to Button', () => {
      expect(button.text()).toBe('title')
    })
  })
})
