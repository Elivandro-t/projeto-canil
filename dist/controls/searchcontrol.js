"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pets_1 = require("../models/Pets");
const crietemenuobj_1 = require("../helpers/crietemenuobj");
const search = (req, res) => {
    let query = req.query.q;
    let list = Pets_1.petf.getdataname(query);
    //retornando para pagina principal
    if (!query) {
        res.redirect("/");
        return;
    }
    //fim do retorno
    //retornado lista do query para pagina via input
    res.render('pages/pages', {
        menu: (0, crietemenuobj_1.createmenuobjet)(''),
        list,
        query
    });
    // fim
};
exports.search = search;
