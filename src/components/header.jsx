import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

function Header(props) {
  return (
    <header>
      <nav>
          <Link className="navLink" to="/signIn">Главная</Link>
          <Link className="navLink" to="/">Каталог</Link>
          <Link className="navLink" to="/signUp">Магазины</Link>
      </nav>
      <p className="user">{props.username}</p>
    </header>
  )
}
export default Header;