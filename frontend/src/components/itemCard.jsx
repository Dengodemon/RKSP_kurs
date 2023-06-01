import React, {Component} from 'react'
import Characteristics from "./characteristics.jsx";
import Button from "./button";
import cordiant from "../imgs/cordiant.jpg"
import goodyear from "../imgs/goodyear.jpg"
import kama from "../imgs/kama.jpg"
import pirelli from "../imgs/pirelli.jpg"
import axios from "axios";

class ItemCard extends Component {
  addToCart = () => {
    let amount = parseInt(this.props.tyre.amount);
    amount += 4;
    console.log(`Now it's ${amount} of `, this.props.tyre);
    const req = {name: this.props.tyre.name, amount: amount.toString()};
    console.log(req);
    try {
      axios
        .put('/api/tyres', req)
        .catch((err) => console.log(err));
      console.log('tried');
    } catch (e) {
      console.log(e.response.data);
    }
  }
  render() {
    return (
      <div className="itemCard">
        <img src={this.props.tyre.img} alt=""/>
        <p className="itemName">{this.props.tyre.name}</p>
        <p className="brand">{this.props.tyre.brand}</p>
        <Characteristics tire={this.props.tyre}/>
        <p className="cost">{this.props.tyre.cost} руб.</p>
        <div className="buttonContainer">
          <button>Купить</button>
          <button onClick={this.addToCart}>Добавить в корзину</button>
        </div>
      </div>
    )
  };
}
export default ItemCard;