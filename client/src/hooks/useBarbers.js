import axios from 'axios';
import {useEffect, useState} from 'react';

async function getBarbers({token}) {
  console.log(token);
  try {
    return await axios.get('/api/barbers', {
      baseURL: 'http://localhost:8000',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error); // Handle any error that occurs
  }
}

const useBarbers = (user, fetchOnCommand = true) => {
  const [barbers, setBarbers] = useState();

  const fetchBarbers = async () => {
    const result = await getBarbers({token: user.token});
    setBarbers(result?.data?.data);
  };
  useEffect(() => {
    if (fetchOnCommand) {
      fetchBarbers();
    }
  }, [user, fetchOnCommand]);
  return {barbers, fetchBarbers};
};
export {useBarbers};
