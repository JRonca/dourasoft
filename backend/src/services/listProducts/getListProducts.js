const connection = require('../../database');
const ListProducts = connection.models.ListProducts;
const listListProducts = async (req, res)=>{
  console.log(req.params.id)
  const listProducts = await ListProducts.findOne({where: {id: req.params.id}});
  return res.status(200).json(listProducts);
}
module.exports = listListProducts;
