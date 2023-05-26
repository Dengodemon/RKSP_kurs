import React from 'react'
import kama from "../imgs/kama.jpg";
import Characteristics from "./characteristics.jsx";

function CartedItem(props) {
  return (
    <div className="cartedItem">
      <img src={props.tire.img} width="250px"/>
      <div className="itemInfo">
        <p className="itemName">{props.tire.name}</p>
        <p className="brand">{props.tire.brand}</p>
        <Characteristics tire={props.tire}/>
      </div>
      <div className="numberChanger">
        <p className="plusOrMinus">-</p>
        <p className="itemNumber">{props.tire.count}</p>
        <p className="plusOrMinus">+</p>
      </div>
    </div>
  )
}
export default CartedItem;