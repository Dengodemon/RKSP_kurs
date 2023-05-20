import React from 'react'
import {Link} from "react-router-dom";

function AuthLink(props) {
  return (
    <Link className="otherSign" to={props.sign.link}>{props.sign.text}</Link>
  )
}
export default AuthLink;