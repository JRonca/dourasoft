import React, {useState, useEffect, useCallback} from 'react';
import { FiArrowLeft, FiHash,FiBox,FiEdit, FiTrash2,FiDollarSign } from 'react-icons/fi';
import api from '../../services/api';
import { useRouteMatch } from 'react-router-dom';
import { TopBarContainer } from '../../components/TopBar/styles';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { Container, List, Content } from './styles';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

const Order = () =>{
  const {params} = useRouteMatch();
  const [order,setOrder]=useState([]);

  const [products,setProducts]=useState([]);

  const [update, setUpdate]=useState(false);

  const [idUpdate,setIdUpdate]=useState(0);
  const [codeUpdate,setCodeUpdate]=useState('');
  const [quantityUpdate,setQuantityUpdate]=useState('');
  const [unitaryValueUpdate,setUnitaryValueUpdate]=useState('');
  const [amountUpdate,setAmountUpdate]=useState('');

  const [controlRender, setControlRender]=useState(true);
  async function handleSubmit(data){
    if(!update){
      await api.post('/listProducts', {
        code:data.code,
        quantity: data.quantity,
        order_id: params.id
      });
      setProducts([]);
    }else{
      await api.put(`/listProducts/${idUpdate}`, {
        code:data.code,
        quantity: data.quantity,
        order_id: params.id
      });
    }
    controlRender ? setControlRender(false): setControlRender(true);
  }
  useEffect(()=>{
    async function listOrder(){
      await api.get(`/order/${params.id}`).then(response=> setOrder(response.data));
      await api.get(`/listProducts/order/${params.id}`).then(response=> setProducts(response.data));
    }
    listOrder();
  },[controlRender]);
  const handleUpdate = useCallback(async(ProductId) => {
    if(update){
      setUpdate(false);
      setCodeUpdate('');
      setQuantityUpdate('');
      setUnitaryValueUpdate('');
      setAmountUpdate('');
    }else{
      setUpdate(true);
      setIdUpdate(ProductId);
      await api.get(`/listProducts/${ProductId}`).then(response=>{
        setCodeUpdate(response.data.id_product);
        setQuantityUpdate(response.data.quantity);
        setUnitaryValueUpdate(response.data.unitary_value);
        setAmountUpdate(response.data.amount);
      });
    }
  },[update])
  const handleDelete = useCallback(async(ProductId) => {
    await api.delete(`/listProducts/${ProductId}`);
    controlRender ? setControlRender(false): setControlRender(true);
  },[]);
  return(
    <>
    <TopBarContainer>
      <Link to="/pedidos"><FiArrowLeft/></Link>
      <h1>Pedido</h1>
    </TopBarContainer>
    <Container>
      <Content>
          <Form  initialData={{code: codeUpdate, quantity: quantityUpdate , unitary_value: unitaryValueUpdate , amount: amountUpdate }} onSubmit={handleSubmit}>
            <h1>{update ? 'Atualização' : "Cadastro"}</h1>
            <Input icon={FiHash} name="code" placeholder="Código"/>
            <Input icon={FiBox} name="quantity" placeholder="Quantidade"/>
            <Input disabled={true}  icon={FiDollarSign} name="unitary_value" placeholder="Valor Unitário"/>
            <Input disabled={true} icon={FiDollarSign} name="amount" placeholder="Total"/>
            <Button type="submit">{update ? 'Atualizar' : "Cadastrar"}</Button>
          </Form>
      <List>
      <h1>Pedido</h1> 
        <div>   
          <div>    
            <p>id: {order.id}</p> <p>Total: R${order.total}</p>     
          </div>    
          <div>    
            <p>Cliente: {order.id_client}</p>    
            <p>Data: {order.data}</p>    
            <p>Status: {order.status}</p>    
          </div> 
          <h2>Produtos:</h2>
          <div>
            <ul>
              {products.map(product=>(
                <div>
                  <li key={product.id}>
                    <p>Id Produto: {product.id_product}</p>    
                    <p>Quantidade: {product.quantity}</p>    
                    <p>Valor Unitario: {product.unitary_value}</p> 
                    <p>Valor Total: {product.amount}</p> 
                  </li>
                  <span>
                    <button onClick={()=>handleUpdate(product.id)}><FiEdit size={20}/></button>
                    <button onClick={()=>handleDelete(product.id)}><FiTrash2 size={20}/></button>
                  </span>
                </div>
              ))}
            </ul>  
          </div>  
        </div>
      </List>
      </Content>
    </Container>
    </>
  );
}
export default Order;