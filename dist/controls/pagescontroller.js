"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const crietemenuobj_1 = require("../helpers/crietemenuobj");
const Pets_1 = require("../models/Pets");
//rotas menus
const home = (req, res) => {
    let list = Pets_1.petf.getAll();
    res.render("pages/pages.mustache", {
        menu: (0, crietemenuobj_1.createmenuobjet)(''),
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pets_1.petf.dogAll('dog');
    res.render('pages/pages.mustache', {
        menu: (0, crietemenuobj_1.createmenuobjet)('dog'),
        banner: {
            title: 'todos os cachoros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pets_1.petf.dogAll('cat');
    res.render('pages/pages.mustache', {
        menu: (0, crietemenuobj_1.createmenuobjet)('cat'),
        banner: {
            title: 'todos os gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pets_1.petf.dogAll('fish');
    res.render('pages/pages.mustache', {
        menu: (0, crietemenuobj_1.createmenuobjet)('fish'),
        banner: {
            title: 'todos os peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
//fim rotas menus
