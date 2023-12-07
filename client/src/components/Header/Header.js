import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../utils/context';
import {HeaderContainer, LogoutButton, BarbershopLogoLight} from '../../styles';
export const Header = () => {
  const {userLogout} = useContext(UserContext);

  const logout = () => {
    userLogout();
  };

  return (
    <HeaderContainer>
      <BarbershopLogoLight />
      <LogoutButton onClick={logout} />
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  onLogout: PropTypes.func,
};
