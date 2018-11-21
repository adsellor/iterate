/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import 'styles/components/button.scss'

const Button = props => (
  <div className={props.className}>
    <Link className="button" to={props.path}>
      {props.children}
    </Link>
  </div>
)

export default Button
