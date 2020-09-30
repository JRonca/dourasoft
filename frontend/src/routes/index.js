import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Client from '../pages/Client/index';
import Product from '../pages/Product/index';
import Pedidos from '../pages/Pedidos/index';
import GetPedidos from '../pages/GetPedidos/index';

const Routes = () =>{
  return(
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/client" component={Client} />
      <Route path="/product" component={Product} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/getpedidos/:id+" component={GetPedidos} />
    </Switch>
  );
}

export default Routes;