const connection = require('../../database');
const Order = connection.models.Order;
const listOrder = async (req, res)=>{
  const orders = await Order.findAll({where:{id_client: req.params.id_client}});
  return res.status(200).json(orders);
}
module.exports = listOrder;
