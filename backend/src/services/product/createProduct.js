const connection = require('../../database');
const Product = connection.models.Product;
const createProduct = async (req, res)=>{
  const product = await Product.findOne({where: {code: req.body.code}});
  if (product){
    return res.status(400).json({ error: 'Produto já está cadastrado' });
  }
  const newProduct = {
    id: req.body.code,
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  }
  const productC = await Product.create(newProduct);
  return res.status(201).json(productC);
}
module.exports = createProduct;
