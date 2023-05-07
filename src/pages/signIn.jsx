import React from 'react'
import TextForm from "../components/textForm";
import Button from '../components/button'
import Header from "../components/header";
import Footer from "../components/footer";

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
    text: "Зарегистрироваться"
  }
  let signIn = {
    text: "Войти"
  }
  return (
    <div className={"content-container"}>
      <form className="sign">
        <TextForm form={mailForm}/>
        <TextForm form={passwordForm}/>
        <Button button={signIn}/>
        <p className={"orSign"}>или</p>
        <Button button={signUp}/>
      </form>
    </div>
  )
}

export default SignIn;