//atribuicao via desestruturacao de um objeto
const pessoa = {                //criando um objeto pessoa
    nome: 'Pedro',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {                 //criando um objeto dentro do objeto
        rua: 'Av Brasil',
        numero: 320
    }
}

//Realizado a atribuição via desestruturação

const {nome, sobrenome, idade} = pessoa; //Aqui estou criando 3 variaveis que recebem o valor do objeto pessoa
console.log(nome, sobrenome, idade)

//Uma outra situação que pode ocorrer é atribuir um valor para um variavel cujo a mesma nao exista no objeto,. EXEMPLO:
const pessoaDois = {                
    //nome: 'Pedro',    //Nesse objeto eu removo o nome
    sobrenomee: 'Lima',
    //idadee: 30,           
    enderecoo: {                 
        ruaa: 'Av Brasil',
        numeroo: 320
    }
}

const{nomee = "Murilo" , sobrenomee} = pessoaDois; // Adicionando o nome direto na atribuição desestruturada
console.log(nomee, sobrenomee)

//atribuindo um valor padrão para variavel

const {idadee: idd = 10} = pessoaDois //Quando idadee não existir dentro do objeto pessoaDois, entao ele pedara o valor padrão que eu passei na variavel idd, caso eu atribua um valor no objeto, idd recebe o valor do objeto e nao o passado aqui.
console.log(idd)

//Exibindo a endereço po completo
const {enderecoo} = pessoaDois
console.log(enderecoo)

//Atribuição desestruturada de endereço
const{endereco: {rua, numero}, endereco} = pessoa   //Aqui estou atribuindo que a partir do objeto endereco eu vou criar duas variaveis rua e endereço que contem o valor do objeto e na frente eu vou exibir o endereço completo a patir do objeto
console.log(rua, numero, endereco);



//Utilizando rest e atribuindo valores padrões
const pessoaTres = {                
    nnome: 'Gabriela',    
    ssobrenome: 'Lima',
    iidade: 30,           
    eendereco: {                 
        rrua: 'Av Brasil',
        nnumero: 320,
        bairro: 'centro'
    }
}

const {nnome, eendereco: {rrua: ruar = 'Santo antonio', nnumero}, ...resto} = pessoaTres //Exibindo variavel pegando do objeto, atribuindo valor padrão e utilizando restante
console.log(nnome, ruar, nnumero, resto)