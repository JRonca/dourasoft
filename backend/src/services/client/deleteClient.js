const connection = require('../../database');
const Client = connection.models.Client;
const deleteClient = async (req, res)=>{
  const {params}=req;
  const client = await Client.findByPk(params.id);
  if (!client){
    return res.status(400).json({ error: 'cliente não encontrado' });
  }
  await client.destroy();
  return res.status(200).json("ok");
}
module.exports = deleteClient;
