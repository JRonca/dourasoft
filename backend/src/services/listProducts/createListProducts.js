const connection = require('../../database');
const ListProducts = connection.models.ListProducts;
const Order = connection.models.Order;
const Product = connection.models.Product;
const createListProducts = async (req, res)=>{
  const product = await Product.findOne({where:{code: req.body.code}});
  if (!product){
    return res.status(400).json({ error: 'Produto não encontrado' });
  }
  const id_product = product.id;
  const listProducts = await ListProducts.findOne({where: {order_id: req.body.order_id, id_product: id_product}});
  if (listProducts){
    return res.status(400).json({ error: 'essa lista já existe' });
  }
  const order = await Order.findByPk(req.body.order_id);
  if (!order){
    return res.status(400).json({ error: 'Pedido não encontrado' });
  }
  const newListProducts = {
    order_id: req.body.order_id,
    id_product: id_product,
    quantity: req.body.quantity,
    unitary_value: product.price,
    amount: product.price*req.body.quantity
  }
  const newOrder = {
    id_client: order.id_client,
    total: parseFloat(order.total)+parseFloat(newListProducts.amount),
    data: order.data,
    status: order.status
  }
  const orderUp = await order.update(newOrder);
  const listProductsC = await ListProducts.create(newListProducts);
  return res.status(201).json(listProductsC);
}
module.exports = createListProducts;
