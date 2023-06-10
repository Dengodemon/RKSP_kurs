import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {UserContext} from "../hooks/UserContext";

function Header(props) {;
  const { user, isLoading } = useContext(UserContext);
  return (
    <header>
      <nav>
        <Link className="navLink" to="/">Каталог</Link>
        <Link className="navLink" to="/shops">Магазины</Link>
        <Link className="navLink" to="/cart">Корзина</Link>
      </nav>
      {user ? (
          <Link className="navLink" to="/account">{user.username}</Link>
      ) : (
        <Link className="navLink" to="/signIn">Войти</Link>
        )}
    </header>
  )
}
export default Header;