import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import {Header} from './components/Header/Header';
import {UserView} from './views/user/UserView';
import {AdminView} from './views/admin/AdminView';
import {BarberView} from './views/barber/BarberView';
import {Login} from './views/Login';
import {Appointments} from './views/user/Appointments';
import {Theme} from './Theme';
import {View} from './styles';
import {UserContext} from './utils/context';
import {Routes, Route, useLocation} from 'react-router-dom';

export const App = () => {
  const location = useLocation();
  const {user} = useContext(UserContext);
  const {auth, role} = user;
  const isAdmin = role === 'admin';
  const isBarber = role === 'barber';
  const isUser = role === 'user';

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <View>
          {location.pathname !== '/login' && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                auth ? (
                  isAdmin ? (
                    <AdminView />
                  ) : isBarber ? (
                    <BarberView />
                  ) : (
                    <UserView />
                  )
                ) : (
                  <Login />
                )
              }
            />

            <Route
              path="/appointments"
              element={
                auth ? (
                  !isUser ? (
                    <Login /> // Render a component for unauthorized access
                  ) : (
                    <Appointments />
                  )
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </View>
      </ThemeProvider>
    </div>
  );
};
