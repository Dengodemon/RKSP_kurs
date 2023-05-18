import React from 'react'
import Button from "./button";
import goodyear from "../imgs/goodyear.jpg"
import kama from "../imgs/kama.jpg"
import pirelli from "../imgs/pirelli.jpg"
import Characteristics from "./characteristics";

function ItemCard (props) {
  let buyButton = {text: "Купить"}
  let inCartButton = {text: "Добавить в корзину"}
  return (
    <div className="itemCard">
      <img src={props.tire.img} alt=""/>
      <p className="itemName">{props.tire.name}</p>
      <p className="brand">{props.tire.brand}</p>
      <Characteristics tire={props.tire} />
      <p className="cost">{props.tire.cost} руб.</p>
      <div className="buttonContainer">
        <Button button={buyButton}/>
        <Button button={inCartButton}/>
      </div>
    </div>
  )
}
export default ItemCard;