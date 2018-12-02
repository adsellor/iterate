import React from 'react'

import Modal from '../../components/signinModal'

describe('Modal', () => {
  let isVisible
  const modal = shallow(<Modal isVisible={isVisible} />)
  describe('given isVisible false', () => {
    isVisible = false
    it("doesn't render", () => {
      expect(modal.find('div.modal-wrapper').exists()).toBeFalsy()
    })
  })
  describe('given isVisible true', () => {
    isVisible = true
    it('renders', () => {
      expect(modal.find('div.modal-wrapper').exists()).toBeTruthy
    })
  })
})
