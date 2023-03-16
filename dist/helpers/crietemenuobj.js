"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createmenuobjet = void 0;
//funcao que retorna um boleano para a paina
const createmenuobjet = (activemenu) => {
    let retunobj = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
        sobre: false
    };
    if (activemenu !== '') {
        return retunobj[activemenu] = true;
    }
    return retunobj;
};
exports.createmenuobjet = createmenuobjet;
//fim
