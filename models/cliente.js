import conecxao from '../config/conecxao.js'

const Cliente= conecxao.Schema({
    nome:{type:String, required:true},
    email:'String',
    endereco:'String',
    telefone:'String',
    cpf:'String',
    admin:'Boolean',
  
});
export default conecxao.model('Cliente', Cliente);