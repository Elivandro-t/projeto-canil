import {Request,Response} from 'express';
import {petf} from '../models/Pets';
import {createmenuobjet} from '../helpers/crietemenuobj';

export const search = (req:Request,res:Response) => {
    let query = req.query.q as string;
    let list = petf.getdataname(query);
    //retornando para pagina principal
     if(!query){
        res.redirect("/");
        return;
     }
     //fim do retorno
//retornado lista do query para pagina via input
    res.render('pages/pages',{
        menu:createmenuobjet(''),
        list,
        query
        
    })
    // fim
}