function trabalhandoComNumeros (){ 
    const form = document.querySelector('.form_num')
    const resultado = document.querySelector('.resultado')

    const numeros = [receberEvento.numeros]

    function receberEvento(evento){
        evento.preventDefault();
        
        const num1 = form.querySelector('.num1');
        const num2 = form.querySelector('.num2');

        numeros.push({
            num1: num1,
            num2: num2
        });

        console.log(numeros);
        resultado.innerHTML += `<p>a Soma de ${num1.value} ${num2.value} é igual a ${num1.value+num2.value}<p>`
    };

    form.addEventListener('submit', receberEvento);
}
trabalhandoComNumeros();