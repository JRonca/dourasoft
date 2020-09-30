import React, { useState, useEffect, useCallback} from 'react';
import { FiUser,FiPhone, FiMapPin, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import { Form } from '@unform/web';

import { Container, Content, List } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import TopBar from '../../components/TopBar/index';

const Client = () =>{
  const [update, setUpdate]=useState(false);
  const [clients,setClients]=useState([]);
  const [controlRender, setControlRender]=useState(true);
  const [idUpdate,setIdUpdate]=useState(0);
  const [nameUpdate,setNameUpdate]=useState('');
  const [phoneUpdate,setPhoneUpdate]=useState('')
  const [addressUpdate,setAddressUpdate]=useState('')
  async function handleSubmit(data) {
    if(!update){
      await api.post('/client', data);
      setClients([]);
    }else{
      await api.put(`/client/${idUpdate}`, data);
      setClients([]);
      setUpdate(false);
    }
    setNameUpdate('');
    setPhoneUpdate('');
    setAddressUpdate('');
    controlRender ? setControlRender(false): setControlRender(true);
  }
  useEffect(()=>{
    async function listClient(){
      await api.get('/client').then(response=> setClients(response.data));
    }
    listClient();
  },[controlRender]);
  const handleUpdate = useCallback(async(ClientId) => {
    if(update){
      setUpdate(false);
      setNameUpdate('');
      setPhoneUpdate('');
      setAddressUpdate('');
    }else{
      setUpdate(true);
      setIdUpdate(ClientId);
      await api.get(`/client/${ClientId}`).then(response=>{
        setNameUpdate(response.data.name);
        setPhoneUpdate(response.data.phone);
        setAddressUpdate(response.data.address);
      });
    }
  },[update])
  const handleDelete = useCallback(async(ClientId) => {
    await api.delete(`/client/${ClientId}`);
    controlRender ? setControlRender(false): setControlRender(true);
  },[]);
  return(
    <Container>
      <TopBar>Clientes</TopBar>
      <Content>
          <Form initialData={{name: nameUpdate , phone: phoneUpdate , address: addressUpdate }} onSubmit={handleSubmit}>
            <h1>{update ? 'Atualização' : "Cadastro"}</h1>
            <Input icon={FiUser} name="name" placeholder="Nome"/>
            <Input icon={FiPhone} name="phone" placeholder="Telefone"/>
            <Input icon={FiMapPin} name="address" placeholder="Endereço"/>
            <Button type="submit">{update ? 'Atualizar' : "Cadastrar"}</Button>
          </Form>
        <List>
          <h1>Listagem</h1>
          <ul>
          {clients.map(client => {
            return (
            <li key={client.id}>
              <div>
                <p>Id: {client.id}</p> <p>Nome: {client.name}</p>
                <p>Telefone: {client.phone}</p>
                <p>Endereço: {client.address}</p>
                <span>
                  <button onClick={() => handleUpdate(client.id)}><FiEdit size={20}/></button>
                  <button onClick={() => handleDelete(client.id)}><FiTrash2 size={20}/></button>
                </span>
                </div>
            </li>
          )
          })}
          </ul>
        </List>
      </Content>
    </Container>
  );
}
export default Client;