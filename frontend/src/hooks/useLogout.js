import { useHistory } from 'react-router-dom';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function useLogout() {
  let history = useHistory();

  const logoutUser = async () => {
    try {
      await axios
        .get(BASE_URL + `auth/logout`)
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