import React from 'react'
import TextForm from "../components/textForm";
import Button from '../components/button'

function SignUp() {
  let login = {
    label: "Логин на сайте",
    name: 'mail',
    placeholder: 'your_mail@email.com',
    maxLength: 20
  }
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
  let passwordConfirmForm = {
    label: "Подтверждение пароля",
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
        <TextForm form={login}/>
        <TextForm form={mailForm}/>
        <TextForm form={passwordForm}/>
        <TextForm form={passwordConfirmForm}/>
        <Button button={signIn}/>
        <p className={"orSign"}>или</p>
        <Button button={signUp}/>
      </form>
    </div>
  )
}
export default SignUp;