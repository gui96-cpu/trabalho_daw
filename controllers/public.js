
import Produto from '../models/produto.js';
import Cliente from '../models/cliente.js';

    
export async function abreCadastro(req,res){
    res.render('cadastro')
}
 
export async function cadastro(req,res){

    //esse comando equivale a um if
    const admin=req.body.admin=="on"?true:false;

    const novoCadastro = new Cliente({ //metodo medio
          nome: req.body.nome,
          email: req.body.email,
          endereco: req.body.endereco,
          telefone: req.body.telefone,
          cpf: req.body.cpf,
          admin:admin,
    });

   await novoCadastro.save();
   res.send("Cadastrado com sucesso!");
}

export async function abreLogin(req,res){
    res.render('login')

}

export async function Login(req,res){
    res.redirect('/')
    
}

export async function abreindex(req,res){
    const produtos=await Produto.find({});
    res.render('public/index.ejs', {Produtos:produtos})
    
}