import React from 'react'
import Button from '../components/button'

describe('Button renders', () => {
  let button
  beforeEach(() => {
    button = mount(<Button path="/">title</Button>)
  })
  describe('Button child component', () => {
    test('Button renders children', () => {
      expect(button.find('a').length).toBe(1)
    })
    test('Correct child is passed to Button', () => {
      expect(button.text()).toBe('title')
    })
  })
})
