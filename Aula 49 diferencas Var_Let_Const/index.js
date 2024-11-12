let nome = 'Luiz';
var nome2 = 'Luiz';

//Não é permitido redeclarar uma variavel Let, porem quando utilizamos o var sim

//let nome = 'Pedro'; //esse exemplo exibe erro
var nome2 = 'Pedro' //utilizando var conseguimos sobrescrever o valor

//O let ele é usado é criado dentro de blocos
//Ou seja eu nao consigo recriar ela apenas se eu estiver no mesmo espo de função(mesmo bloco{})
//Porem se estiver em separados consigo normalmente
//exemplo, nome ja esta declarado no escopo geral agora vou abrir um novo dnentro de um if e criar a variavel com let

const verdadeiro = true;
if(verdadeiro){
    let nome = 'Roberto'// aqui estou criando a variavel dentro deste bloco
    console.log(nome)// quando exibo aqui dentro vai mostrar roberto
}

//Porém se utilizo console.log dentro do escopo global
console.log(nome) // o valor nao sera Roberto e sim Luiz

//já para var, sempre que eu faço a mesma coisa eu nao estou criando mas sim redeclarando ou seja, sobrescrevendo o valor independente do escopo

if(verdadeiro){
    var nome2 = "Murilo"
    console.log(nome2)//redeclarei o var nome2 e estou exbindo dentro de outro escopo
}
console.log(nome2)//Quando exibo dentro do escopo geral, diferente de let o var pega o valor redeclarado.

//Exemplo com funçao
//A function possui uma questão especial, onde ela protege toda variavel q esta dentro dela
//Mas elas consegue acessar variavel que esta ao seu redor, por exemplo

 function falaOi(){
    var nome3 = "Miguel"
    console.log(`Oi, ${nome3}`)
 }
 //console.log(`Oi, ${nome3}`) //Neste caso ao tentar executar vai exibir erro

 //porem se eu declaro fora da function seria possivel utilizar, pois a fuction protege apenas o que esta dentro mas acessa o que esta fora

var nome4 = "Rogerio"/declara var

 function falaTchau(){
    console.log(`Tchau, ${nome4}`)//Vi conseguir acessar var nome4

    if(verdadeiro){//também consegue acessar a variavel verdadeiro pois foi declarada ao redor
        let nome5 = "Rute" //Cria a variavel dentro apenas desse bloco
        console.log(nome5)
    }
    //console.log(nome5) //Ja fora do bloco if nao funcionaria
 }
