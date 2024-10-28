//capturando evento do submit

const form = document.querySelector('.formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){ //se peso for diferente de verdadeiro
        setResultado('Peso inválido', false); //exibe esse valor
        return; //quando passamos return, a execução para aqui
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}, ${nivelImc} `
    setResultado(msg, true)
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return nivel[5]; //Em javaScript quando temos apenas um linha dentro do If não precisamos utilizar o abrir e fechar {}
    if (imc >= 34,9) return nivel[4];
    if (imc >= 29,9) return nivel[3];
    if (imc >= 24,9) return nivel[2];
    if (imc >= 18,5) return nivel[1]; 
    if (imc < 18,5)  return nivel[0];
}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    console.log(imc)
    return imc.toFixed(2); //pra nao ter que definir o toFixed em todos os resultado coloca ele apenas 1 vez na função calculo imc
}

function criaP(){
    const p = document.createElement('p'); //cria uma elemento <p>paragrafo</p>
    return p;
    //p.classList.add('paragrado-resultado'); //cria uma classe no <p> criado anteiormente
    //p.innerHTML = 'teste'; //atribui um valor para exibir em p
}

function setResultado(msg, isValid){ //função para setar valor em resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //seta resultado em branco na tela,/
    
    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('paragrafo-bad');
    }
    
    p.innerHTML = msg; //atribui um valor para exibir em p
    resultado.appendChild(p); //Insere elemento criado <p> dentro da div resultado
}



/**function calculoIMC(){
    const form = document.querySelector('.form')
    const resposta = document.querySelector('.resposta')

    function receberEvento(evento){
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

       const imc= {
            peso: peso.value,
            altura: altura.value
        };

        let valorImc = parseFloat(imc.peso)/((parseFloat(imc.altura)/100) ** 2);

        if(imc.peso === '' || imc.altura === ''){
            valorImc = "Os campos Peso e Altura são obrigatórios";
            resposta.innerHTML = `<p>"Os campos Peso e Altura são obrigatórios"</p>`
        }else if(valorImc < 18.5 ){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Abaixo do peso)"</p>`
        }else if (valorImc >= 18.5 && valorImc < 25 ){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Peso Normal)"</p>`
        }else if (valorImc >= 25 && valorImc <= 29.9){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Sobrepeso)"</p>`
        }else if(valorImc >= 30 && valorImc <= 34.9){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Obesidade grau 1)"</p>`
        }else if(valorImc >= 35 && valorImc < 40){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Obesidade grau 2)"</p>`
        }else if(valorImc >= 40){
            resposta.innerHTML = `<p>"O seu imc é: ${valorImc.toFixed(2)} (Obesidade grau 3)"</p>`
        }else{
            resposta.innerHTML = `<p>"Valor inválido  ${valorImc.toFixed(2)}"</p>`
        }

    }

    form.addEventListener('submit', receberEvento);
}
calculoIMC();

//*/