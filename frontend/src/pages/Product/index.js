import React, {useState, useEffect, useCallback} from 'react';
import { FiBookmark,FiHash,FiDollarSign, FiAlignLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import { Form } from '@unform/web';

import { Container, Content, List } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import TopBar from '../../components/TopBar/index';

const Product = () =>{
  const [update, setUpdate]=useState(false);
  const [products,setProducts]=useState([]);
  const [idUpdate,setIdUpdate]=useState(0);
  const [codeUpdate,setCodeUpdate]=useState('');
  const [nameUpdate,setNameUpdate]=useState('');
  const [controlRender, setControlRender]=useState(true);
  const [descriptionUpdate,setDescriptionUpdate]=useState('')
  const [priceUpdate,setPriceUpdate]=useState('')
  async function handleSubmit(data){
    if(!update){
      await api.post('/product', data);
      setProducts([]);
    }else{
      await api.put(`/product/${idUpdate}`, data);
    }
    controlRender ? setControlRender(false): setControlRender(true);
  }
  useEffect(()=>{
    async function listProduct(){
      await api.get('/product').then(response=> setProducts(response.data));
    }
    listProduct();
  },[controlRender]);
  const handleUpdate = useCallback(async(ProductId) => {
    if(update){
      setUpdate(false);
      setCodeUpdate('');
      setNameUpdate('');
      setDescriptionUpdate('');
      setPriceUpdate('');
    }else{
      setUpdate(true);
      setIdUpdate(ProductId);
      await api.get(`/product/${ProductId}`).then(response=>{
        setCodeUpdate(response.data.code);
        setNameUpdate(response.data.name);
        setDescriptionUpdate(response.data.description);
        setPriceUpdate(response.data.price);
      });
    }
  },[update])
  const handleDelete = useCallback(async(ProductId) => {
    await api.delete(`/product/${ProductId}`);
    controlRender ? setControlRender(false): setControlRender(true);
  },[]);
  return(
    <Container>
      <TopBar>Produtos</TopBar>
      <Content>
          <Form  initialData={{code: codeUpdate, name: nameUpdate , description: descriptionUpdate , price: priceUpdate }} onSubmit={handleSubmit}>
            <h1>{update ? 'Atualização' : "Cadastro"}</h1>
            <Input icon={FiHash} name="code" placeholder="Código"/>
            <Input icon={FiBookmark} name="name" placeholder="Nome"/>
            <Input icon={FiAlignLeft} name="description" placeholder="Descrição"/>
            <Input icon={FiDollarSign} name="price" placeholder="Preço"/>
            <Button type="submit">{update ? 'Atualizar' : "Cadastrar"}</Button>
          </Form>
        <List>
          <h1>Listagem</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <div>
                  <p>
                    <p>Código: {product.code}</p> <p>Nome: {product.name}</p>
                  </p>
                  <p>
                    <p>Preço: R${product.price}</p>
                    <p>Descrição: {product.description}</p>
                  </p>
                  <span>
                    <button onClick={()=>handleUpdate(product.id)}><FiEdit size={20}/></button>
                    <button onClick={()=>handleDelete(product.id)}><FiTrash2 size={20}/></button>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
}
export default Product;