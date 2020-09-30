const connection = require('../../database');
const Order = connection.models.Order;
const ListProducts = connection.models.ListProducts;
const deleteListProducts = async (req, res)=>{
  const {params}=req;
  const listProducts = await ListProducts.findByPk(params.id);
  if (!listProducts){
    return res.status(400).json({ error: 'lista não encontrado' });
  }
  const order = await Order.findByPk(listProducts.order_id);
  const newOrder = {
    id_client: order.id_client,
    total: parseFloat(order.total)-parseFloat(listProducts.amount),
    data: order.data,
    status: order.status
  }
  const orderUp = await order.update(newOrder);
  await listProducts.destroy();
  return res.status(200).json("ok");
}
module.exports = deleteListProducts;
