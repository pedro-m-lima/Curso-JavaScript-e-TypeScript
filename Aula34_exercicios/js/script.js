function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado =document.querySelector('.resultado');

 //exercicio
 const pessoas = [receberEvento.pessoa];

 function receberEvento(evento){
     evento.preventDefault();
     
     const nome = form.querySelector('.nome');
     const sobrenome = form.querySelector('.sobrenome');
     const peso = form.querySelector('.peso');
     const altura = form.querySelector('.altura');
     
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
     
    //pessoas.push(pessoa);
    console.log(pessoas);
    
    resultado.innerHTML += `<p>${nome.value}
    ${sobrenome.value} ${peso.value} ${altura.value}</p>`
};
    
form.addEventListener('submit', receberEvento);
}
meuEscopo();
//*/

    //Essa é uma forma raiz de fazer com que a partir de um evento realize uma operação
    /*/
    form.onsubmit = function(evento) {  //declara que form.on dubmit recebe uma função que por parametro recbe um evento
        evento.preventDefault(); //Impede o comportamento padrão do navegador de enviar o form
        alert(1);
        console.log("foi enviado")
    };
    //*/

    /*/Esse é um jeito mais atual e pratico de se adicionar um espião de eventos
   
     let contador = 0;
    function receberEvento(evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${++contador} `)
   };
    
   form.addEventListener('submit', receberEvento);
   //*/

  
   
