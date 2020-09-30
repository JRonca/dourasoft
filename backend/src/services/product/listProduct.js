const connection = require('../../database');
const Product = connection.models.Product;
const listProduct = async (req, res)=>{
  const products = await Product.findAll();
  return res.status(200).json(products);
}
module.exports = listProduct;
