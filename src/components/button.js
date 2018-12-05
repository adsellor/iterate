/* @flow */

import React from 'react'

import 'styles/components/button.scss'

type ButtonProps = {
  className?: ?string,
  path?: string,
  children: any,
  onClick: Function,
  backgroundColor: string,
}

const Button = (props: ButtonProps) => (
  <div
    style={{
      background: props.backgroundColor,
    }}
    onClick={props.onClick}
    className={`${`button ${props.className}`}`}
  >
    {props.children}
  </div>
)

export default Button
