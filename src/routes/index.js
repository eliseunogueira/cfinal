import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Empresas from '../components/Empresas';
import Clientes from '../components/Clientes';
import Equipamentos from '../components/Equipamentos';
import Certificado from '../components/Certificado';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    decode(token);
  } catch (error) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/addcertificado" exact component={Certificado} />
      <Route path="/addequipamento" exact component={Equipamentos} />
      <Route path="/addcliente" exact component={Clientes} />
      <Route path="/addempresa" exact component={Empresas} />
      <PrivateRoute path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);
