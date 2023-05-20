import React from 'react'
import ItemCard from "../components/itemCard"
import cordiant from "../imgs/cordiant.jpg"
import goodyear from "../imgs/goodyear.jpg"
import kama from "../imgs/kama.jpg"
import pirelli from "../imgs/pirelli.jpg"

function Catalog () {
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
    cost: 3674
  }
  let pirSum225 = {
    img: pirelli,
    name: "PIRELLI POWERGY 225/60 R18 104V XL",
    brand: "PIRELLI",
    width: 225,
    profile: 60,
    diameter: 18,
    carType: "Легковой",
    season: "Летняя",
    spikes: "Нет",
    cost: 12110
  }
  let kamaWin175 = {
    img: kama,
    name: "КАМА IRBIS КАМА-505 175/70 R13 82T",
    brand: "KAMA",
    width: 175,
    profile: 70,
    diameter: 13,
    carType: "Легковой",
    season: "Зимняя",
    spikes: "Есть",
    cost: 3120
  }
  let goodWin275 = {
    img: goodyear,
    name: "GOODYEAR ULTRAGRIP ARCTIC 2 SUV 275/45 R21 110T XL",
    brand: "GOOGYEAR",
    width: 275,
    profile: 45,
    diameter: 21,
    carType: "Легковой",
    season: "Зимняя",
    spikes: "Есть",
    cost: 24770
  }
  return (
    <div className="content-container">
      <h1>Каталог</h1>
      <div className="itemsContainer">
        <ItemCard tire={cordSum185}/>
        <ItemCard tire={pirSum225} />
        <ItemCard tire={kamaWin175} />
        <ItemCard tire={goodWin275} />
      </div>
    </div>
  )
}
export default Catalog;