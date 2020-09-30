const connection = require('../../database');
const Order = connection.models.Order;
const Client = connection.models.Client;
const updateOrder = async (req, res)=>{
  const {params}=req;
  const order = await Order.findByPk(params.id);
  if (!order){
    return res.status(400).json({ error: 'pedido não encontrado' });
  }
  const client = await Client.findByPk(req.body.id_client);
  if (!client){
    return res.status(400).json({ error: 'cliente não existe' });
  }
  const newOrder = {
    id_client: req.body.id_client,
    total: req.body.total,
    data: req.body.data,
    status: req.body.status
  }
  const orderUp = await order.update(newOrder);
  return res.status(200).json(orderUp);
}
module.exports = updateOrder;
