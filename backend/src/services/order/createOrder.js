const connection = require('../../database');
const Order = connection.models.Order;
const Client = connection.models.Client;
const createOrder = async (req, res)=>{
  const client = await Client.findByPk(req.body.id_client);
  if (!client){
    return res.status(400).json({ error: 'cliente não encontrado' });
  }
  const newOrder = {
    id_client: req.body.id_client,
    total: 0,
    data: req.body.data,
    status: req.body.status
  }
  const orderC = await Order.create(newOrder);
  return res.status(201).json(orderC);
}
module.exports = createOrder;
