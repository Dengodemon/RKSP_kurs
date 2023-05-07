import React from 'react'
import TextForm from "../components/textForm";
import Button from '../components/button'
import AuthLink from "../components/authLink";

function SignIn() {
  let mailForm = {
    label: "Адрес электронной почты",
    name: 'mail',
    placeholder: 'your_mail@email.com',
    maxLength: 70
  }
  let passwordForm = {
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