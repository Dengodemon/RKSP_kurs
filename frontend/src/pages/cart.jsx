import React, {Component} from 'react'
import kama from "../imgs/kama.jpg"
import cordiant from "../imgs/cordiant.jpg";
import Button from "../components/button.jsx";
import CartedItem from "../components/cartedItem.jsx";
import axios from "axios";
import ItemCard from "../components/itemCard";

class Cart extends Component {
  state = {
    tyres: [],
  };

  componentDidMount() {
    this.getTyres();
    console.log('componentDidMount()')
  }

  getTyres = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    axios
      .get(BASE_URL + '/api/tyres')
      .then((res) => {
        console.log('getTyres() returned', res.data);
        if (res.data) {
          this.setState({
            tyres: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let {tyres} = this.state;
    let buyButton = {
      text: "Купить"
    }
    return (
      <div className="content-container">
        <h1>Корзина</h1>
        {tyres.map((tyre) => {
          console.log('map\'s size is', tyres.length);
          return (
            <>
              <CartedItem tyre={tyre}/>
            </>);
        })}
        <Button button={buyButton}/>
      </div>
    )
  }
}
export default Cart;