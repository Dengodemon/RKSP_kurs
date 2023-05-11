import React from 'react'
import ItemCard from "../components/itemCard";

function Catalog () {
  let cordSum185 = {
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
  return (
    <div className="content-container">
      <h1>Каталог</h1>
      <div className="itemsContainer">
        <ItemCard tire={cordSum185}/>
        <ItemCard tire={cordSum185} />
      </div>
    </div>
  )
}
export default Catalog;