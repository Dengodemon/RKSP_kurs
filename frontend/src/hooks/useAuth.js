import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
import { UserContext } from './UserContext';

export default function useAuth() {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  //set user
  const setUserContext = async () => {
    console.log('setUserContext (useAuth (hooks))');
    return await axios.get(BASE_URL + 'view/user',{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      }}).then(res => {
      setUser(res.data.user);
      console.log('axios.get(view/user): ', res.data.user);
      navigate('/');
    }).catch((err) => {
      console.log('ERROR', err);
      setError(err.response);
    })
  }

  //register user
  const registerUser = async (data) => {
    console.log('registerUser (UseAuth (hooks))');
    const { username, email, password, passwordConfirm } = data;
    return axios.post(BASE_URL + `auth/register`, {
      username,
      email,
      password,
      passwordConfirm
    }, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      }}).then(async () => {
      await setUserContext();
    })
      .catch((err) => {
        return setError(err.response.data);
      })
  };

  //login user
  const loginUser = async (data) => {
    console.log('loginUser data: ', data);
    const { username, password } = data;
    return axios.post(BASE_URL + '/auth/login', {
      username,
      password,
    }, {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      }}).then(async () => {
      await setUserContext();
    }).catch((err) => {
      console.log('ERROR', err);
      setError(err.response);
    })
  };

  return {
    registerUser,
    loginUser,
    error
  }
}