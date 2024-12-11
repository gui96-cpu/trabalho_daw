import conecxao from '../config/conecxao.js'

const Piloto= conecxao.Schema({
    nome:'String',
     cpf:'string',
     certificado:'String',
    
});
export default conecxao.model('Piloto', Piloto);