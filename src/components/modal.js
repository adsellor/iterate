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
    // <div
    //   style={{
    //     position: 'absolute',
    //     top: 0,
    //     bottom: 0,
    //     right: 0,
    //     left: 0,
    //   }}
    // >
    <div onClick={props.onClose} className="modal-wrapper">
      <div className="container">{props.children}</div>
      <div className="close-icon" onClick={props.onClose} />
    </div>
    // </div>
  )

export default Modal
