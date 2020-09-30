const connection = require('../../database');
const Client = connection.models.Client;
const listClient = async (req, res)=>{
  const clients = await Client.findOne({where:{id: req.params.id}});
  return res.status(200).json(clients);
}
module.exports = listClient;
