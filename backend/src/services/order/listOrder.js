const connection = require('../../database');
const Order = connection.models.Order;
const listOrder = async (req, res)=>{
  const orders = await Order.findAll();
  return res.status(200).json(orders);
}
module.exports = listOrder;
