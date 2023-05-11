import React from 'react'
import Button from "./button";

function ItemCard (props) {
  let buyButton = {text: "Купить"}
  let inCartButton = {text: "Добавить в корзину"}
  return (
    <div className="itemCard">
      <img/>
      <p className="itemName">{props.tire.name}</p>
      <p className="brand">{props.tire.brand}</p>
      <table>
        <tr>
          <td className="characteristic">Ширина, мм</td>
          <td>{props.tire.width}</td>
        </tr>
        <tr>
          <td className="characteristic">Профиль, %</td>
          <td>{props.tire.profile}</td>
        </tr>
        <tr>
          <td className="characteristic">Диаметр, дюйм</td>
          <td>{props.tire.diameter}</td>
        </tr>
        <tr>
          <td className="characteristic">Тип автомобиля</td>
          <td>{props.tire.carType}</td>
        </tr>
        <tr>
          <td className="characteristic">Сезон</td>
          <td>{props.tire.season}</td>
        </tr>
        <tr>
          <td className="characteristic">Шипы</td>
          <td>{props.tire.spikes}</td>
        </tr>
      </table>
      <p className="cost">{props.tire.cost} руб.</p>
      <div className="buttonContainer">
        <Button button={buyButton}/>
        <Button button={inCartButton}/>
      </div>
    </div>
  )
}
export default ItemCard;