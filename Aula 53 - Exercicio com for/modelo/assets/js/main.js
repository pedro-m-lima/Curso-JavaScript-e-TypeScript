
/** Minha solução
const mensagens = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

    for(i = 0; i < elementos.length; i++){
        mensagens.innerHTML += (`<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`)
        console.log(`<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`)
    }
//*/

//** Solução professor
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const mensagens = document.querySelector('.container');
const div = document.createElement('div'); //criando uma div para adicionar os elementos dentro da mesma

    for(i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i]; //Realizando a atribuição via desestruturação do array onde é passado por cada indice do array e alimentado as variaveis
        let tagCriada = document.createElement(tag); //criando um elemento utiilizando a tag extraida do array
        //tagCriada.innerHTML = texto; //Após tag criada, aqui adicionamos o texto nela, utilizando o innerHTML
        
        //Na ultima linha, nos manipuamos o texto utilizando o inner HTML
        //Porém como nosso texto não possui nenhum html, é mais seguro utilizar o InnerText
        //Pois caso houvesse algo que pudesse ser identificado com tag html poderia quebrar o codigo
        //tagCriada.innerText = texto; // alteado o innerText com o texto

        //Outra forma de atribuir o texto a tag criada será criando um node texto
        let textoCriado = document.createTextNode(texto) //Aqui nos criamos uma variavel que recebe um elemento texto
        tagCriada.appendChild(textoCriado)//Aqui atribuimos o texto a tagcriada, passando o node e nao necessitando o innertext

        div.appendChild(tagCriada); //Nessa linha pegamos a div que foi criada no escopo geral e adionamos um filho para ela que é a tag criada
        
       // mensagens.innerHTML += (`<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`)
       // console.log(`<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`)
    }

    mensagens.appendChild(div)//Aqui nos pegamos tudo que atribuimos a div dentro do for, e eximos no container
//*/