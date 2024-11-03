const data = document.querySelector('#data')

function exibirDataAtual(dataAtual) {
    let data
    switch(data){
        case 0:
        diaSemanaTexto ='Domingo'
        return diaSemanaTexto;
        case 1:
        diaSemanaTexto ='Segunda'
        return diaSemanaTexto;
        case 2:
        diaSemanaTexto ='Terça'
        return diaSemanaTexto;
        case 3:
        diaSemanaTexto ='Quarta'
        return diaSemanaTexto;
        case 4:
        diaSemanaTexto ='Quinta'
        return diaSemanaTexto;
        case 5:
        diaSemanaTexto ='Sexta'
        return diaSemanaTexto;
        case 6:
        diaSemanaTexto ='Sabado'
        return diaSemanaTexto;
        default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

data.innerHTML = "data atual teste"
