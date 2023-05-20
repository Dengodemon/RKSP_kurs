import React from 'react'

function ShopItem(props) {
  return (
    <div className="shopItem">
      <p className="subway">{props.shop.subway}</p>
      <p className="address">{props.shop.address}</p>
      <p>Часы работы: {props.shop.schedule}</p>
    </div>
  )
}
export default ShopItem;