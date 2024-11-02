/*//MarcoZero
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// Padrão zero - data atual
const data = new Date() // em branco passa a data de hoje como parâmetro
console.log(data.toString());

//Padrão 1 - Passado valor
const tresHoras = 60 * 60 * 3 * 1000; //em java script é calculado em milisegundos, então 60 seg vezes 60 seg da 1 hr vezes 3 temos 3 horas, tudo isso vezes 1000 para converter de milisegundo.
const data = new Date(0 +tresHoras); //01/01/1970 Timestamp unix ou época unix em javascript o Marco zero é essa data
console.log(data.toString());

//Calculando 1 dia na hora
const umDia = 60 * 60 * 25 * 1000; //realiza o calculo para dar 1 dia em horas
const dataDois = new Date(0 + umDia + 10800000); // adiciona 1 dia no marco zero ou seja, 01/01/1970 + 24hrs = 02/01/1970
console.log(dataDois.toString());

//*/// Padrão 2 passando a, m, h, d, h, M, s, ms

const data = new Date(2019, 3, 15, 14, 59, 999); //ano, mes, dia, hora, minutos, segundos, milisegundos 
// podemos omitir os valores até a hora, somente ano não é possivel
// o mes começa contando do numero zero
console.log(data.toString());
// sempre que remover um parametro será zerado o valor, exemplos abaixo
const dataSemMili = new Date(2019, 3, 15, 14, 59);
console.log(dataSemMili.toString());

const dataSemSeg = new Date(2019, 3, 15, 14);
console.log(dataSemSeg.toString());

const dataSemMin = new Date(2019, 3, 15);
console.log(dataSemMin.toString());

const dataSemMes = new Date(2019, 3);
console.log(dataSemMes.toString());

//Padrão 3 - Passando data string - FORMATO MAIS UTILIZADO

const dataStringOne = new Date('2019-04-20 20:20:59') //dessa forma separamos a data do horario com o espaço,
console.log(dataStringOne.toString());

const dataStringTwo = new Date('2019-04-20T20:20:58.1000')
console.log(dataStringTwo.toString())

console.log('Dia', dataStringOne.getDate())
console.log('Mes', dataStringOne.getMonth()+1)//passo mes mais 1 pois javascript exibe mes iciando do zero
console.log('Ano', dataStringOne.getFullYear())
console.log('Hora', dataStringOne.getHours())
console.log('Min', dataStringOne.getMinutes())
console.log('seg', dataStringOne.getSeconds())
console.log('ms', dataStringOne.getMilliseconds())
console.log('Dia da semana', dataStringOne.getDay()) //0 = domingo, 6 igual a sabado

//quando passamos a função de data atual, o javascript exibe em milesimos de segundos, exemplo:
console.log('Data atual = '+ Date.now())
//se eu jogo esse valor dentro de uma variavel ele da a data de hoje
const dataAtual = new Date(Date.now())
console.log(dataAtual)

//Criand uma função que formata uma data

//Funcao para adicionar zero a esquerda, utilizando operacao ternaria
function zeroAesquerda (num){
    return num >= 10 ? num : `0${num}`;
}

//função que retorna data
function formataData(dataformat) {
    //console.log(dataformat)
    const dia = zeroAesquerda(dataformat.getDate());
    const mes = zeroAesquerda(dataformat.getMonth()+1);
    const ano = zeroAesquerda(dataformat.getFullYear());
    const hora = zeroAesquerda(dataformat.getHours());
    const min = zeroAesquerda(dataformat.getMinutes());
    const sec = zeroAesquerda(dataformat.getSeconds());
    const ms = zeroAesquerda(dataformat.getMilliseconds());
    const diaDaSemana = zeroAesquerda(dataformat.getDay());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}
// exibindo data
const dataformat = new Date();
const dataBrasil = formataData(dataformat);
console.log(dataBrasil)


