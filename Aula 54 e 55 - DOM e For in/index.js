const frutas = ['Pera', 'Maçã', 'Uva'];

//for padrão
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}


//for in
for (let i in frutas){          //Dessa forma nor criamos uma variavel que vai percorrer automaticamente dentro do array frutas, exibindo o resultado do inicio do array até o final
    console.log(frutas[i])
}

//for in com objetos

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lima',
    idade: 30
}

for (let chave in pessoa){              //Neste exemplo acontece o mesmo, porem percorre dentro de um objeto pessoa onde o indice ele reconhece como a descrição dos atributos
    console.log(chave, pessoa[chave]) 
}