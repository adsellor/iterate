import React from 'react'
import { Link } from 'gatsby'

import '../assets/button.scss'

const Button = (props) => <Link className="button" to={props.path}>{props.children}</Link>

export default Button
