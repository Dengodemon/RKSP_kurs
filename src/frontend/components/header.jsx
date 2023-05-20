import React from 'react'
import {Link} from "react-router-dom"
import SignIn from "../pages/signIn";

function Header(props) {
  return (
    <header>
      <nav>
          <Link className="navLink" to="/">Главная</Link>
          <Link className="navLink" to="/shops">Магазины</Link>
          <Link className="navLink" to="/cart">Корзина</Link>
      </nav>
      <Link className="navLink" to="/signIn">antony.z@mail.ru</Link>
    </header>
  )
}
export default Header;