import axios from 'axios';
import {useEffect, useState} from 'react';

async function getAppointments({token}) {
  try {
    return await axios.get('/api/appointments', {
      baseURL: 'http://localhost:8000',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error); // Handle any error that occurs
  }
}

const useAppointments = (user, fetchOnCommand = true) => {
  const [appointments, setAppointments] = useState();

  const fetchAppointments = async () => {
    const result = await getAppointments({token: user.token});
    setAppointments(result?.data?.data);
  };

  useEffect(() => {
    if (fetchOnCommand) {
      fetchAppointments();
    }
  }, [user, fetchOnCommand]);

  return {appointments, fetchAppointments};
};

export {useAppointments};
