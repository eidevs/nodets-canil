import express, {Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import maiRouter from './rotas/index';

dotenv.config();

const server = express();


server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Abilitando pegar dados pela url
server.use(express.urlencoded({extended:true}));

//adicionando rota 
server.use(maiRouter);

server.use(( req: Request, res: Response)=>{
    res.status(404).render('pages/404');
});


server.listen(process.env.PORT);