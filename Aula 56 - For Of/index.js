const nome = 'Pedro Murilo'
const nomes = ['Pedro Lima', 'Murilo de Lima', 'Pedro de Lima']

//for (let i = 0; i < nome.length; i++) {           // Utiulizar for classicos co iteráveis, por exemplo (Array e strings)
//    console.log(nome[i])
//}

//for (let i in nome){          //For in utilizar para retrnar o indice ou chave para iteráveis (String, array ou objetos)
//    console.log(nome[i]);
//}

for (let valor of nomes){   //For in utilizar para retrnar o indice ou chave para iteráveis (String, array) // A deifierença do for Of é que pode ser passado direto o valor sem necessitar do indice
    console.log(valor)
}