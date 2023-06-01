import React, {Component} from 'react'
import AuthLink from "../components/authLink.jsx";
import axios from "axios";

class SignIn extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    checkPass: '',
  };
  log = () => {
    const user = {action: this.state};
    if (user.login &&
      user.login.length > 4 &&
      user.email.isEmail() &&
      user.password === user.checkPass
    ) {
      axios
        .post('/api/auth/login', user)
        .then((res) => {
          if (res.data) {
            this.props.login();
            this.setState({
              login: '',
              email: '',
              password: '',
              checkPass: '',
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };
  handleChangeEm = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleChangePass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    let signUp = {
      text: "Зарегистрироваться",
      link: "/signUp"
    }
    let params = this.state;
    return (
      <div className={"content-container"}>
        <form className="sign-container">
          <p>Адрес электронной почты</p>
          <input type="text"
                 placeholder='your_mail@email.com'
                 maxLength={70}
                 onChange={this.handleChangeEm}
                 value={params.email}
          />
          <p>Пароль</p>
          <input type="password"
                 placeholder='••••••••'
                 maxLength={24}
                 onChange={this.handleChangePass}
                 value={params.password}
          />
          <button onClick={this.log}>Войти</button>
          <p className={"orSign"}>или</p>
          <AuthLink sign={signUp}/>
        </form>
      </div>
    )
  }
}
export default SignIn;