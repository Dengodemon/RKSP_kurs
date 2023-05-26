import React from 'react'
import TextForm from "../components/textForm.jsx";
import Button from '../components/button.jsx'
import AuthLink from "../components/authLink.jsx";

function SignIn() {
  let mailForm = {
    type: "text",
    label: "Адрес электронной почты",
    name: 'mail',
    placeholder: 'your_mail@email.com',
    maxLength: 70
  }
  let passwordForm = {
    type: "password",
    label: "Пароль",
    name: 'password',
    placeholder: '••••••••',
    maxLength: 24
  }
  let signUp = {
    text: "Зарегистрироваться",
    link: "/signUp"
  }
  let signIn = {
    text: "Войти"
  }
  return (
    <div className={"content-container"}>
      <form className="sign-container">
        <TextForm form={mailForm}/>
        <TextForm form={passwordForm}/>
        <Button button={signIn}/>
        <p className={"orSign"}>или</p>
        <AuthLink sign={signUp}/>
      </form>
    </div>
  )
}

export default SignIn;