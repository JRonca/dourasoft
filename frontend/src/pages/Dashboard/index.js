import React from 'react';

import { Container, Content, Background } from './styles';
import { Link } from 'react-router-dom';

const Dashboard = () =>{
  return(
    <Container>
      <Content>
        <h1>Dashboard</h1>
        <Link to="/client">Clientes</Link>
        <Link to="/product">Produtos</Link>
        <Link to="/pedidos">Pedidos</Link>
      </Content>
      <Background />
    </Container>
  );
}
export default Dashboard;