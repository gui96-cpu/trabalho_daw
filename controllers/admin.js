import Piloto from "../models/piloto.js";
import Cliente from "../models/cliente.js";
import Produto from "../models/produto.js";
import Contrato from "../models/contrato.js";

export async function listarcliente(req, res) {
    const clientes = await Cliente.find({});
    res.render('admin/clientes/lst',{Clientes: clientes});
}

export async function abreaddcliente(req, res) {
    res.render('admin/clientes/add');
}

export async function abreedtcliente(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    res.render('admin/clientes/edt', { Cliente: cliente });
}


export async function edtcliente(req, res) {
    await Cliente.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/clientes/lst')
}


export async function addcliente(req, res) {
    await Cliente.create({
        nome:req.body.nome,
        cpf:req.body.cpf,
        email:req.body.email,
    })
    res.redirect('admin/clientes/lst');
}

export async function deletecliente(req, res) {
    await Cliente.findByIdAndDelete(req.params.id)
    res.redirect('/admin/clientes/lst')
}



export async function filtrarcliente(req, res) {
    console.log(req.body.pesquisar)
    const clientes = await Cliente.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/clientes/lst',{Clientes: clientes});
}


//---------------contrato------------------------------
export async function abreaddcontrato(req, res){
    res.render('admin/contrato/add')
}


export async function addcontrato(req, res){
    await Contrato.create({
        nome:req.body.nome,
        valormensal:req.body.valormensal,
        datacontrato:req.body.datacontrato,
    })
  res.redirect('/admin/contrato/add');

}
export async function listarcontrato(req, res){
    const contratos = await Contrato.find({});
    res.render('admin/contrato/lst',{Contrato: contratos});
}

export async function filtrarcontrato(req, res){
    const contratos = await Contrato.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/contrato/lst',{Contrato: contratos});
}

export async function deletecontrato(req, res){
     await Contrato.findByIdAndDelete(req.params.id)
    res.redirect('/admin/contrato/lst')
}


export async function abreedtcontrato(req, res){
    const contratos= await Contrato.findById(req.params.id)
   res.render('admin/contrato/edt.ejs',{Contrato: contratos});
}
export async function edtcontrato(req, res){
    await Contrato.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/contrato/lst')
}

//-------------------------produto---------------------------------------



export async function abreaddproduto(req, res){
    res.render('admin/produto/add')
}

/*
export async function addproduto(req, res){
   console.log('req.files');
    let fotos=[];
   for(var i=0; i<req.files; i++){
    fotos[i] = req.files[i].filename;
   }
    await Produto.create({
        nome:req.body.nome,
        valor:parseFloat(req.body.valor),
        foto:fotos,
    });
  res.redirect('/admin/produto/add');

}*/
export async function addproduto(req, res) {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }

    let fotos = []

    for (let i = 0; i < req.files.length; i++) {
        console.log(`Arquivo ${i + 1}:`, req.files[i]);
        fotos.push(req.files[i].filename);
    }
    await Produto.create({
        nome:req.body.nome,
        valor:req.body.valor,
        foto: fotos        
    })  
     res.redirect('/admin/produto/add');
    
    
}


export async function filtrarproduto(req, res){
    const produtos = await Produto.find({nome: new RegExp(req.body.pesquisar,"i")});
    res.render('admin/produto/lst',{Produto: produtos});
}

export async function deleteproduto(req, res){
     await Produto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/produto/lst')
}


export async function abreedtproduto(req, res){
    const produto= await Produto.findById(req.params.id)
   res.render('admin/produto/edt.ejs',{Produto: produto});
}
export async function edtproduto(req, res){
    await Produto.findByIdAndUpdate(req.params.id,req.body)
   res.redirect('/admin/produto/lst')
}
export async function listarproduto(req, res){
    const produtos = await Produto.find({});
    res.render('admin/produto/lst',{Produto: produtos});
}
//-------------------------piloto-------------------------


export async function listarpiloto(req, res){
    const pilotos = await Piloto.find({});
    res.render('admin/piloto/lst',{Piloto: pilotos});
}


export async function abreaddpiloto(req, res){
    res.render('admin/piloto/add')
}


export async function abreedtpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/piloto/edt',{Piloto: pilotos});
}

export async function deletepiloto(req, res) {
    await Piloto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/piloto/lst')
}

export async function filtrarpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/piloto/lst',{Piloto: pilotos});
}

export async function addpiloto(req, res) {

    await Piloto.create({
        nome:req.body.nome,
        cpf:req.body.cpf,
        certificado:req.body.certificado,
    })
  res.redirect('/admin/piloto/add');
    
}

export async function edtpiloto(req, res) {
    const pilotos = await Piloto.find({});
    res.render('admin/piloto/lst',{Piloto: pilotos});
}

export async function pesquisar(req, res) {
    try {
        // Identificar a origem da requisição usando o cabeçalho Referer
        const referer = req.headers.referer || '';
        console.log('Referer:', referer);

        if (referer.includes('/admin/cliente')) {
            return filtrarcliente(req, res);
        } else if (referer.includes('/admin/produto')) {
            return filtrarproduto(req, res);
        } else if (referer.includes('/admin/piloto')) {
            return filtrarpiloto(req, res);
        } else if (referer.includes('/admin/contrato')) {
            return filtrarcontrato(req, res);
        } else {
            return filtrarcliente(req, res);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
}
