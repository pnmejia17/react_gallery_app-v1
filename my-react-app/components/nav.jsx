import React from "react"
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <ul>
      <li><Link to="/cats">Cats</Link></li>
      <li><Link to="/dogs">Dogs</Link></li>
      <li><Link to="/computers">Computers</Link></li>
    </ul>
  )
}


export default Nav

