import React from 'react'
import {Link} from "react-router-dom"

function Header(props) {
  const isAuth = false;


  return (
    <header>
      <nav>
        <Link className="navLink" to="/">Каталог</Link>
        <Link className="navLink" to="/shops">Магазины</Link>
        <Link className="navLink" to="/cart">Корзина</Link>
      </nav>
      {isAuth ? (
          <Link className="navLink" to="/account">{props.user.login}</Link>
      ) : (
        <Link className="navLink" to="/signUp">Зарегистрироваться</Link>
        )}
    </header>
  )
}
export default Header;