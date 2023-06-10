import React, {Component, useState} from 'react'
import AuthLink from "../components/authLink.jsx";
import useForm from './../hooks/useForm';
import useAuth from './../hooks/useAuth';

export default function SignUp() {

  const {values, handleChange} = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    }
  });

  const {registerUser, error} = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(values);
  }

  let signInLink = {
    link: '/signIn',
    text: 'Войти'
  }

  return (
    <div className="content-container">
      {/*<div className="sign-container">*/}
        {/*<div className="">*/}
        {/*  {error && <Error error={error.messages}/>}*/}
        {/*</div>*/}
        <form className="sign-container" onSubmit={handleRegister}>
          <p>Логин на сайте</p>
          <input type="text"
                 placeholder="Login"
                 maxLength={20}
                 name={'username'}
                 onChange={handleChange}
                 value={values.username}
          />
          <p>Адрес электронной почты</p>
          <input type="text"
                 placeholder='your_mail@email.com'
                 maxLength={70}
                 name={'email'}
                 onChange={handleChange}
                 value={values.email}
          /><p>Пароль</p>
          <input type="password"
                 placeholder='••••••••'
                 maxLength={24}
                 name={'password'}
                 onChange={handleChange}
                 value={values.password}
          />
          <p>Подтверждение пароля</p>
          <input type="password"
                 placeholder='••••••••'
                 maxLength={24}
                 name={'passwordConfirm'}
                 onChange={handleChange}
                 value={values.passwordConfirm}
          />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            <p className={"orSign"}>или</p>
            <AuthLink sign={signInLink}/>
        </form>
      {/*</div>*/}
    </div>
  )
}