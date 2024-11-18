//criando um for que exibe varias linhas em seguida, 1,2,3,4,5
for(let i = 0; i <= 5; i++){      //Para um for é necessário, criar um variavel de controle com valor inicial, criar condição e criar um incrementador
console.log(i)
}

for(let i = 0; i<= 10; i++){
    num = i % 2 === 0 ? "Par" : "Impar" //Utilizando operaçao ternária para verificar se o valor de I no for é par ou impar
    console.log(i, num)
}

const fruta = ['Maça', 'Banana', 'Uva', 'Pessego']

for(let i = 0; i < fruta.length; i++){        //  Percorrendo um array utilizando o for
    console.log(`index ${i} ${fruta[i]}`)
}