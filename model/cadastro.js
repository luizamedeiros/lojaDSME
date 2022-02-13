const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CadastroSchema = new Schema({
 nome: {
  type: String, 
  required: [true, 'Nome Obrigatório'], 
  max: 100
 },
 email: {
  type: String, 
  required: [true, 'E-mail Obrigatório'], 
  max: 100
 },
 cpf: {
  type: String, 
  required: [true, 'CPF Obrigatório']}
 });
// Exportar o modelo
module.exports = mongoose.model('cadastro', CadastroSchema);