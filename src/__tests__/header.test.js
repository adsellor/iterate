import React from 'react'

import Header from '../components/header'

describe('Header renders', () => {
  let header
  beforeEach(() => {
    header = mount(<Header siteTitle="siteTitle" />)
  })
  describe('Header child component', () => {
    test('Header renders children', () => {
      expect(header.find('h1').length).toBe(1)
    })
    test('Correct siteTitle is passed to Header', () => {
      const siteTitleWrapper = header.find('h1')
      expect(siteTitleWrapper.text()).toBe('siteTitle')
    })
  })
})
