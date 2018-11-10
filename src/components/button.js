/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/button.scss'

type ButtonProps = {
  path: string,
  children: any,
  className: string,
}
const Button = (props: ButtonProps) => (
  <div className={props.className}>
    <Link className="button" to={props.path}>
      {props.children}
    </Link>
  </div>
)

export default Button
