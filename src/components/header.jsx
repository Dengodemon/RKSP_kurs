import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function Header(props) {
    return (
        <header>
          <nav>
            <p>Главная</p>
            <p>Каталог</p>
            <p>Магазины</p>
          </nav>
          <p className="user">{props.username}</p>
        </header>
    )
}
export default Header;