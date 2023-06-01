import React, {Component} from 'react'
import AuthLink from "../components/authLink.jsx";
import axios from "axios";

class SignUp extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    checkPass: '',
  };
  reg = () => {
    const user = {action: this.state};
    if (user.login &&
      user.login.length > 4 &&
      user.email.isEmail() &&
      user.password === user.checkPass
    ) {
      axios
        .post('/api/auth/register', user)
        .then((res) => {
          if (res.data) {
            this.props.register();
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
  handleChangeLog = (e) => {
    this.setState({
      login: e.target.value,
    });
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
  handleChangeCP = (e) => {
    this.setState({
      checkPass: e.target.value,
    });
  };

  render() {
    let signIn = {
      text: "Войти",
      link: "/signIn"
    }
    let params = this.state;
    return (
      <div className={"content-container"}>
        <form className="sign-container">
          <p>Логин на сайте</p>
          <input type="text"
                 placeholder="Login"
                 maxLength={20}
                 onChange={this.handleChangeLog}
                 value={params.login}
          />
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
          <p>Подтверждение пароля</p>
          <input type="password"
                 placeholder='••••••••'
                 maxLength={24}
                 onChange={this.handleChangeCP}
                 value={params.checkPass}
          />
          <button onClick={this.reg}>Зарегистрироваться</button>
          <p className={"orSign"}>или</p>
          <AuthLink sign={signIn}/>
        </form>
      </div>
    )
  }
}
export default SignUp;