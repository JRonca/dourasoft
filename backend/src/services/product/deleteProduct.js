const connection = require('../../database');
const Product = connection.models.Product;
const deleteProduct = async (req, res)=>{
  const {params}=req;
  const product = await Product.findByPk(params.id);
  if (!product){
    return res.status(400).json({ error: 'produto não encontrado' });
  }
  await product.destroy();
  return res.status(200).json("ok");
}
module.exports = deleteProduct;
