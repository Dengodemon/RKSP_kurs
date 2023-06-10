import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() =>{
    async function findUser() {
      console.log('findUser (useFindUser)');
      await axios.get('view/user', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          setUser(res.data.user.doc);
          console.log('then');
          console.log(res.data.user.doc);
          setLoading(false);
        }).catch(err => {
          console.log(err);
          setLoading(false);
        });
    }

    findUser();
  }, []);

  return {
    user,
    setUser,
    isLoading
  }
}