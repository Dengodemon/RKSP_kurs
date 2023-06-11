import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useLogout() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  let history = useHistory();

  const logoutUser = async () => {
    try {
      await axios
        .get(BASE_URL + `/auth/logout`, {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': 'tyre-shop-back.onrender.com',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          console.log(res);
          history.push('/');
        })
    } catch (err) {
      console.log(err);
    }
  }

  return {
    logoutUser
  }

}