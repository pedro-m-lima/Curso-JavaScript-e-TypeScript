/*// Solução 1
const dataCabecalho = document.querySelector('#data')

function getDiaSemana(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMesData(mesData) {
    let mesDataTexto
    switch (mesData + 1) {
        case 1:
            mesDataTexto = 'Janeiro'
            return mesDataTexto;
        case 2:
            mesDataTexto = 'Fevereiro'
            return mesDataTexto;
        case 3:
            mesDataTexto = 'Março'
            return mesDataTexto;
        case 4:
            mesDataTexto = 'Abril'
            return mesDataTexto;
        case 5:
            mesDataTexto = 'Maio'
            return mesDataTexto;
        case 6:
            mesDataTexto = 'Junho'
            return mesDataTexto;
        case 7:
            mesDataTexto = 'Julho'
            return mesDataTexto;
        case 8:
            mesDataTexto = 'Agosto'
            return mesDataTexto;
        case 9:
            mesDataTexto = 'Setembro'
            return mesDataTexto;
        case 10:
            mesDataTexto = 'Outubro'
            return mesDataTexto;
        case 11:
            mesDataTexto = 'Novembro'
            return mesDataTexto;
        case 12:
            mesDataTexto = 'Dezembro'
            return mesDataTexto;
        default:
            mesDataTexto = ''
            return mesDataTexto;
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getMonth();

//console.log(`${getDiaSemana(diaSemana)}, ${data.getDate} de ${diaMes(mesData)} de ${data.getFullYear} ${data.getHours}:${data.getMinutes}`)
console.log(`${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMesData(diaMes)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)

dataCabecalho.innerHTML = `${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMesData(diaMes)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
//*/

/* Solução 2
const h1 = document.querySelector('.container h1')
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}) + ' ' + data.toLocaleTimeString('pt-BR');
//*/

const dataCabecalho = document.querySelector('#data')

function getDiaSemana(diaSemana) {
    const diaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diaSemanaTexto[diaSemana]
}

function getMesData(mesData) {
    const mesDataTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mesDataTexto[mesData]
}

const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getMonth();

//console.log(`${getDiaSemana(diaSemana)}, ${data.getDate} de ${diaMes(mesData)} de ${data.getFullYear} ${data.getHours}:${data.getMinutes}`)
console.log(`${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMesData(diaMes)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)

dataCabecalho.innerHTML = `${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMesData(diaMes)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
