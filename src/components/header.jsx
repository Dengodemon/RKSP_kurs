import React from 'react'
import {Link} from "react-router-dom"

function Header(props) {
  return (
    <header>
      <nav>
          <Link className="navLink" to="/">Главная</Link>
          <Link className="navLink" to="/shops">Магазины</Link>
          <Link className="navLink" to="/cart">Корзина</Link>
      </nav>
      <p className="user">{props.username}</p>
    </header>
  )
}
export default Header;