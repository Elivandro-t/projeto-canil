import {Request,Response} from 'express';
import {createmenuobjet} from "../helpers/crietemenuobj";
import {petf} from '../models/Pets'
//rotas menus
export const home = (req:Request,res:Response)=>{
    let list = petf.getAll();
    res.render("pages/pages.mustache",{
        menu: createmenuobjet(''),
        banner:{
            title:'todos os animais',
            background:'allanimals.jpg'

        },
        list
    })
};
export const dogs = (req:Request,res:Response)=>{
    let list = petf.dogAll('dog')
    res.render('pages/pages.mustache',{
        menu: createmenuobjet('dog'),
        banner:{
            title:'todos os cachoros',
            background:'banner_dog.jpg'

        },
        list
    })
};
export const cats = (req:Request,res:Response)=>{
    let list = petf.dogAll('cat')
    res.render('pages/pages.mustache',{
        menu: createmenuobjet('cat'),
        banner:{
            title:'todos os gatos',
            background:'banner_cat.jpg'

        },
        list
    })
};
export const fishes = (req:Request,res:Response)=>{
    let list = petf.dogAll('fish')
    res.render('pages/pages.mustache',{
        menu:createmenuobjet('fish'),
        banner:{
            title:'todos os peixes',
            background:'banner_fish.jpg'

        },
        list
    })
};
//fim rotas menus
