/* @flow */

import React from 'react'

import 'styles/components/modal.scss'

type ModalProps = {
  children: any,
  onClose: Function,
  isVisible: boolean,
}

const Modal = (props: ModalProps) =>
  props.isVisible && (
    <div onClick={props.onClose} className="modal-wrapper">
      <div className="container">{props.children}</div>
      <div className="close-icon" onClick={props.onClose} />
    </div>
  )

export default Modal
