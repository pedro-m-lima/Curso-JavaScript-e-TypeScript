//Escreva uma função chamada epaisagem que
//recebe 2 argumentos, largura e altura
//de uma imagem number
//retorne true se a imagem estiver no modo paisagem

//solucao minha 1
function ePaisagem(largura, altura){
    return largura > altura? true : false
}
console.log(ePaisagem(1080,1920))

//solução minha 2
const epaisage = (largura, altura) => largura > altura? true: false
console.log(epaisage(1920,1080))

//solucao professor 1

function ePaisagem2(largura, altura){
    return largura > altura
}
console.log(ePaisagem2(1080,1920))

//solucao professor 2
const epaisage2 = (largura, altura) => largura > altura
console.log(epaisage2(1920,1080))
