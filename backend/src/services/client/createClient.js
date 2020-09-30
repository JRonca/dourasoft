const connection = require('../../database');
const Client = connection.models.Client;
const createClient = async (req, res)=>{
  const client = await Client.findOne({where: {name: req.body.name}});
  if (client){
    return res.status(400).json({ error: 'cliente já está cadastrado' });
  }
  const newClient = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address
  }
  const clientC = await Client.create(newClient);
  return res.status(201).json(clientC);
}
module.exports = createClient;
