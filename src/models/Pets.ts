type pettypes =  'dog'|'cat'|'fish';

type pet = {
    type: pettypes,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino'|'Feminino'
    preco: number
}
//meus models, funcoes que retorna objetos 
const data: pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        preco: 0

    },
    {
        type: 'dog',
        image: 'salcicha.jpeg',
        name: 'salcicha',
        color: 'Preto',
        sex: 'Masculino',
        preco: 0

    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino',
        preco: 0
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino',
        preco: 0
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino',
        preco: 0
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino',
        preco: 0

    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino',
        preco: 0
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino',
        preco: 0
    }
]
//usando tipagem, da tudo
export const petf= {
   getAll:():/*usado tipagem */ pet[] =>{
    return data;
   },
// da so os tapes que eu quero
   dogAll:( type: pettypes):/*usado tipagem */ pet[] =>{
    return data.filter(item=>item.type===type);
   },
   //funcoao que eu preciso nos parametros
   getdataname:( name:string):/*usado tipagem */ pet[] =>{
    return data.filter(item=>item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase())> -1
    );
   }
};
//usando tipagem