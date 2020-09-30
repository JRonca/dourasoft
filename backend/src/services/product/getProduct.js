const connection = require('../../database');
const Product = connection.models.Product;
const listProduct = async (req, res)=>{
  const products = await Product.findOne({where:{id: req.params.id}});
  return res.status(200).json(products);
}
module.exports = listProduct;
