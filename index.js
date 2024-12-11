import express from 'express';
import moment from 'moment';


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));

app.locals.moment = moment

import publicroutes from './routes/public.js';
import adminroutes from './routes/admin.js';

app.use(publicroutes);

app.use (adminroutes);

app.get("/admin/cliente/lst",(req,res)=>{
      res.render('admin/clientes/lst')
});


app.listen(port);