import React from 'react'
import ShopItem from "../components/shopItem.jsx";

function ShopAddresses () {
  let shopMskZhukov = {
    subway: "м. Полежаевская, м. Хорошёво",
    address: "г. Москва, Маршала Жукова пр., 1с1",
    schedule: "ежедневно с 9:00 до 20:00"
  }
  let shopMskAvtoz = {
    subway: "м. Автозаводская",
    address: "г. Москва, Автозаводская ул., 18",
    schedule: "ежедневно с 9:00 до 20:00"
  }
  let shopKrasnogorskNovor = {
    address: "г. Красногорск, Новорижское ш., 1",
    schedule: "ежедневно с 9:00 до 20:00"
  }
  return (
    <div className="content-container">
      <h1>Адреса магазинов</h1>
      <ShopItem shop={shopMskZhukov} />
      <ShopItem shop={shopMskAvtoz} />
      <ShopItem shop={shopKrasnogorskNovor} />
    </div>
  )
}
export default ShopAddresses;