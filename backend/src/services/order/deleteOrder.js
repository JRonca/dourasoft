const connection = require('../../database');
const Order = connection.models.Order;
const deleteOrder = async (req, res)=>{
  const {params}=req;
  const order = await Order.findByPk(params.id);
  if (!order){
    return res.status(400).json({ error: 'Pedido não encontrado' });
  }
  await order.destroy();
  return res.status(200).json("ok");
}
module.exports = deleteOrder;
