/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import 'styles/components/button.scss'

type ButtonProps = {
  className?: string,
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
    className="button"
  >
    {props.children}
  </div>
)

export default Button
