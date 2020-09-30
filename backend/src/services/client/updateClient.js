const connection = require('../../database');
const Client = connection.models.Client;
const updateClient = async (req, res)=>{
  const {params}=req;
  const client = await Client.findByPk(params.id);
  if (!client){
    return res.status(400).json({ error: 'cliente não encontrado' });
  }
  const newClient = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address
  }
  const clientUp = await client.update(newClient);
  return res.status(200).json(clientUp);
}
module.exports = updateClient;
