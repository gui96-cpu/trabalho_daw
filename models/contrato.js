import conecxao from '../config/conecxao.js'

const Contrato= conecxao.Schema({
     nome:'string',
     valormensal:'number',
     datacontrato:'date',
  
});
export default conecxao.model('Contrato', Contrato);