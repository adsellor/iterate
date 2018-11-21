/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/button.scss'

type ButtonProps = {
  className: string,
  path: string,
  children: any,
}

const Button = (props: ButtonProps) => (
  <div className={props.className}>
    <Link className="button" to={props.path}>
      {props.children}
    </Link>
  </div>
)

export default Button
