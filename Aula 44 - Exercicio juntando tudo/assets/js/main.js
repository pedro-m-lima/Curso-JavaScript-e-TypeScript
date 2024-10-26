function calculoIMC(){
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