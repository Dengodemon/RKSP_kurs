import React from 'react'
import kama from "../imgs/kama.jpg"
import cordiant from "../imgs/cordiant.jpg";
import Characteristics from "../components/characteristics";
import Button from "../components/button";
import CartedItem from "../components/cartedItem";

function Cart () {
  let cordSum185 = {
    img: cordiant,
    name: "Шина летняя 185/65R15 ROAD_RUNNER, PS-1 б/к",
    brand: "CORDIANT",
    width: 185,
    profile: 65,
    diameter: 15,
    carType: "Легковой",
    season: "Летняя",
    spikes: "Нет",
    cost: 3674,
    count: 4
  }
  let butButton = {
    text: "Купить"
  }
  return (
    <div className="content-container">
      <h1>Корзина</h1>
      <CartedItem tire={cordSum185} />
      <Button button={butButton} />
    </div>
  )
}
export default Cart;