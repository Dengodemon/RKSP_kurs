import React, {Component} from 'react'
import AuthLink from "../components/authLink.jsx";
import useForm from "../hooks/useForm";
import useAuth from "../hooks/useAuth";

export default function SignIn() {

  const { values, handleChange } = useForm({
    initialValues: {
      username: '',
      password: ''
    }
  });

  const { loginUser, error } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(values);
  }
  let signUp = {
    text: "Зарегистрироваться",
    link: "/signUp"
  }

  return(
    <div className='content-container'>
      <div className="sign-container">
        {/*<div className="">*/}
        {/*  {error && <Error error={error.messages}/>}*/}
        {/*</div>*/}
        <form className={"sign-container"} onSubmit={handleLogin}>
          <p>Логин</p>
          <input type="text"
                 placeholder='your_mail@email.com'
                 maxLength={70}
                 name={'username'}
                 onChange={handleChange}
                 value={values.username}
          />
          <p>Пароль</p>
          <input type="password"
                 placeholder='••••••••'
                 maxLength={24}
                 name={'password'}
                 onChange={handleChange}
                 value={values.password}
          />
            <button onClick={handleLogin}>Войти</button>
            <p className={"orSign"}>или</p>
            <AuthLink sign={signUp}/>
        </form>
      </div>
    </div>
  )
}
