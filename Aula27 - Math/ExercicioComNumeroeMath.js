        const numero = Number(prompt("Digite um número:"));
        const numerotitulo = document.getElementById('numero-titulo')

        const texto = document.getElementById('texto')

        //Utilizamos o getElementById para pegar um elemtno atraves do id dele

        numerotitulo.innerHTML = numero;

        texto.innerHTML  = `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong> </p>`                 
        texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
        texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></br>`;                  
        texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;   
        texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;   
        texto.innerHTML += `<p>Com duas casas decimais: <strong>${(numero).toFixed(2)}</strong></p>`; //*/