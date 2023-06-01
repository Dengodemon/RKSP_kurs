import React, {Component} from 'react'

class Button extends Component {


  render() {
    return (
      <button>{this.props.button.text}</button>
    )
  }
}
export default Button;