import conecxao from '../config/conecxao.js'

const Produto= conecxao.Schema({
    nome:'String',
     valor:'number',
     foto:[{type: String}],
     estoque:'number',
  
});
export default conecxao.model('Produto', Produto);