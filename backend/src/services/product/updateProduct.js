const connection = require('../../database');
const Product = connection.models.Product;
const updateProduct = async (req, res)=>{
  const {params}=req;
  const product = await Product.findByPk(params.id);
  if (!product){
    return res.status(400).json({ error: 'produto não encontrado' });
  }
  const newProduct = {
    id: req.body.code,
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  }
  const productUp = await product.update(newProduct);
  return res.status(200).json(productUp);
}
module.exports = updateProduct;
