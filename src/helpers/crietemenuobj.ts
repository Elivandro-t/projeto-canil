type menuoption = ''| 'all' | 'dog' |'cat' | 'fish';
//funcao que retorna um boleano para a paina

export const createmenuobjet = (activemenu:menuoption)=>{
    let retunobj = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }
    if(activemenu !== '' ){ 
        return retunobj[activemenu] = true;
    }
    return retunobj;
}
//fim