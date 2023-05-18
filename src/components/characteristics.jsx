import React from 'react'

function Characteristics(props) {
  return (
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
  )
}
export default Characteristics;