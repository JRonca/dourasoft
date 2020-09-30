import React, {useState, useEffect, useCallback} from 'react';
import { FiCalendar,FiSearch, FiEdit, FiTrash2,FiUser, FiDollarSign, FiClipboard } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import { Container, List, Content } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';
import TopBar from '../../components/TopBar/index';

const Order = () =>{
  const [update, setUpdate]=useState(false);
  const [orders,setOrders]=useState([]);
  const [idClientUpdate,setIdClientUpdate]=useState('');
  const [dataUpdate,setDataUpdate]=useState('');
  const [statusUpdate,setStatusUpdate]=useState('')
  const [totalUpdate,setTotalUpdate]=useState('')
  const [controlRender, setControlRender]=useState(true);
  const [idUpdate,setIdUpdate]=useState(0);
  
  async function handleSubmitSearch(data){
    const clients = await api.get('/client');
    const idClient = clients.data.find(client=> client.name=== data.search);
    await api.get(`/order/client/${idClient.id}`).then(response=> setOrders(response.data));
  }
  async function handleSubmit(data){
    if(!update){
      await api.post('/order', data);
    }else{
      await api.put(`/order/${idUpdate}`, data);
    }
    controlRender ? setControlRender(false): setControlRender(true);
  }
  const handleUpdate = useCallback(async(OrderId) => {
    if(update){
      setUpdate(false);
      setIdClientUpdate('');
      setDataUpdate('');
      setStatusUpdate('');
      setTotalUpdate('');
    }else{
      setUpdate(true);
      setIdUpdate(OrderId);
      console.log(OrderId);
      await api.get(`/order/${OrderId}`).then(response=>{
        setIdClientUpdate(response.data.id_client);
        setDataUpdate(response.data.data);
        setStatusUpdate(response.data.status);
        setTotalUpdate(response.data.total);
      });
    }
  },[update])
  useEffect(()=>{
    async function listOrder(){
      await api.get('/order').then(response=> setOrders(response.data));
    }
    listOrder();
  },[controlRender]);
  const handleDelete = useCallback(async(OrderId) => {
    await api.delete(`/order/${OrderId}`);
    setOrders([]);
    controlRender ? setControlRender(false): setControlRender(true);
  },[]);
  return(
    <>
    <TopBar>Pedidos</TopBar>
    <Container>
      <Form onSubmit={handleSubmitSearch}>
        <Input icon={FiSearch} name="search" placeholder="Pesquisar"/>
        <Button type="submit">Pesquisar</Button>
      </Form>
      <Content>
        <Form initialData={{id_client: idClientUpdate , data: dataUpdate , status: statusUpdate, total: totalUpdate }} onSubmit={handleSubmit}>
          <h1>{update ? 'Atualizar' : "Cadastrar"}</h1>
          <Input icon={FiUser} name="id_client" placeholder="Id do Cliente"/>
          <Input icon={FiCalendar} type="date" name="data" placeholder="Data"/>
          <Select
            icon={FiClipboard}
            name="status"
            placeholder="Status"
            options={[{value: 'aberto', label: 'Aberto'}, {value: 'entregue', label: 'Entregue'}, {value: 'cancelado', label: 'Cancelado'}]}
          />
          <Input disabled={true} icon={FiDollarSign} name="total" placeholder="Total"/>
          <Button type="submit">{update ? 'Atualizar' : "Cadastrar"}</Button>
        </Form>
        <List>
          <h1>Listagem</h1>
          <ul>
            {orders.map((order)=>{
              return (
                <li key={order.id}>
                  <div>
                    <div>
                      <p>id: {order.id}</p> <p>Total: R${order.total}</p>
                      <span>
                        <Link to={`/getpedidos/${order.id}`}>+</Link>
                      </span>
                    </div>
                    <div>
                      <p>Cliente: {order.id_client}</p>
                      <p>Data: {order.data}</p>
                      <p>Status: {order.status}</p>
                      <span>
                        <button onClick={()=>{handleUpdate(order.id)}}><FiEdit size={20}/></button>
                        <button onClick={()=>{handleDelete(order.id)}}><FiTrash2 size={20}/></button>
                      </span>
                    </div>
                  </div>
                </li>
            )})}
          </ul>
        </List>
      </Content>
    </Container>
    </>
  );
}
export default Order;