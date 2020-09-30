const connection = require('../../database');
const ListProducts = connection.models.ListProducts;
const listListProducts = async (req, res)=>{
  const listProducts = await ListProducts.findAll({where: {order_id: req.params.order_id}});
  return res.status(200).json(listProducts);
}
module.exports = listListProducts;
