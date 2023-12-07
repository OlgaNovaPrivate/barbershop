import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

const userData = {
  username: '',
  auth: false,
  token: '',
};

const UserProvider = ({children}) => {
  const isLoggedIn = () => {
    const loggedIn = !!window.localStorage.getItem('user-info');
    const data = window.localStorage.getItem('user-info');
    return loggedIn ? JSON.parse(data) : userData;
  };

  const [user, setUser] = useState(isLoggedIn());

  const userLogin = response => {
    let data = {...response, auth: true};
    var jwt = jwt_decode(data.token);
    data = {...data, role: jwt.role};
    window.localStorage.setItem('user-info', JSON.stringify(data));
    setUser(data);
  };

  const userLogout = () => {
    window.localStorage.removeItem('user-info');
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{user, userLogin, userLogout}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any,
};

export default UserProvider;
