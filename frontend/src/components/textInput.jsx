import React, {Component} from 'react'
import axios from 'axios';
class TextInput extends Component {
  state = {
    action: '',
  };
  addTodo = () => {
    const task = {action: this.state.action};
    if (task.action && task.action.length > 0) {
      axios
        .post('/api/todos', task)
        .then((res) => {
          if (res.data) {
            this.props.register();
            this.setState({action: ''});
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };
  handleChange = (e) => {
    this.setState({
      action: e.target.value,
    });
  };

  render() {
    let {action} = this.state;
    return (
      <input type={this.props.form.type}
             name={this.props.form.name}
             placeholder={this.props.form.placeholder}
             maxLength={this.props.form.maxLength}
             onChange={this.handleChange}
             value={action}
      />
    )
  }
}
export default TextInput;