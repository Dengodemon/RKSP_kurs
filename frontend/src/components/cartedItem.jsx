import React, {Component} from 'react'
import kama from "../imgs/kama.jpg";
import Characteristics from "./characteristics";
import axios from "axios";

class CartedItem extends Component {
  state = {
    amount: this.props.tyre.amount,
  }
  addOne = () => {
    let amount = this.state.amount;
    amount += 1;
    const req = {name: this.props.tyre.name, amount: amount.toString()};
    try {
      axios
        .put('/api/tyres', req)
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e.response.data);
    }
    this.setState({amount: amount});
  }

  reduceOne = () => {
    let amount = this.state.amount;
    amount -= 1;
    if (amount < 0)
      return;
    const req = {name: this.props.tyre.name, amount: amount.toString()};
    try {
      axios
        .put('/api/tyres', req)
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e.response.data);
    }
    this.setState({amount: amount});
  }

  render() {
    let params = this.state;
    return (
      <div className="cartedItem">
        <img src={this.props.tyre.img} width="250px"/>
        <div className="itemInfo">
          <p className="itemName">{this.props.tyre.name}</p>
          <p className="brand">{this.props.tyre.brand}</p>
          <Characteristics tire={this.props.tyre}/>
        </div>
        <div className="numberChanger">
          <button onClick={this.reduceOne} className="plusOrMinus">-</button>
          <p className="itemNumber">{params.amount}</p>
          <button onClick={this.addOne} className="plusOrMinus">+</button>
        </div>
      </div>
    )
  }
}
export default CartedItem;