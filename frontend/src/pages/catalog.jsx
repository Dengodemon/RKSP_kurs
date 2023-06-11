import React, {Component} from 'react'
import ItemCard from "../components/itemCard.jsx"
import axios from "axios";

class Catalog extends Component {
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
    console.log('tyres: ', tyres);

    return (
      <div className="content-container">
        <h1>Каталог</h1>
        <div className="itemsContainer">
          {tyres.map((tyre) => {
            console.log('map\'s size is', tyres.length);
            return (
              <ItemCard tyre={tyre}/>
            );
          })}
        </div>
      </div>
    )
  }
}
export default Catalog;